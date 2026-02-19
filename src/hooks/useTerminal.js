// ==========================================
// FILE: src/hooks/useTerminal.js
// ==========================================
import { useReducer, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TERMINAL_OPTIONS, ARCHIVE_SECTIONS, LOADING_MSG } from "../utils";

const initialState = {
  terminalValue: "",
  caretPos: 0,
  output: [],
  isLoading: false,
  waitingForPassword: false, // new
};

function terminalReducer(state, action) {
  switch (action.type) {
    case "SET_VALUE":
      return { ...state, terminalValue: action.payload };
    case "SET_CARET":
      return { ...state, caretPos: action.payload };
    case "APPEND_OUTPUT":
      return { ...state, output: [...state.output, action.payload] };
    case "CLEAR_OUTPUT":
      return { ...state, output: [] };
    case "CLEAR_INPUT":
      return { ...state, terminalValue: "", caretPos: 0 };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_WAITING_PASSWORD":
      return { ...state, waitingForPassword: action.payload };
    default:
      return state;
  }
}

export function useTerminal() {
  const [state, dispatch] = useReducer(terminalReducer, initialState);
  const inputRef = useRef(null);
  const terminalInnerRef = useRef(null);
  const navigate = useNavigate();

  const clearInput = () => {
    dispatch({ type: "CLEAR_INPUT" });
    if (inputRef.current) {
      inputRef.current.innerText = ""; // Clear the DOM element
    }
  };

  // Auto-scroll terminal
  useEffect(() => {
    if (terminalInnerRef.current) {
      terminalInnerRef.current.scrollTop =
        terminalInnerRef.current.scrollHeight;
    }
  }, [state.output]);

  // Focus input
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      const range = document.createRange();
      range.selectNodeContents(inputRef.current);
      range.collapse(false);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }, [state.output]);

  const handleCommand = (value) => {
    const val = value.trim().toLowerCase();

    const addOutput = (output) => {
      dispatch({
        type: "APPEND_OUTPUT",
        payload: { type: "cmd", value: val, output },
      });
    };

    const navigateAndClear = (route) => {
      dispatch({ type: "CLEAR_OUTPUT" });
      clearInput();
      navigate(`/${route}`);
    };

    if (state.waitingForPassword === true) {
      const pass = "052022";
      if (pass === value) {
        dispatch({ type: "SET_WAITING_PASSWORD", payload: false });
        navigateAndClear("love");
      }
    } else if (val === ".\\forever.exe" || val === "./forever.exe") {
      dispatch({ type: "SET_LOADING", payload: true });
      addOutput(LOADING_MSG);
      clearInput();

      setTimeout(() => {
        dispatch({
          type: "APPEND_OUTPUT",
          payload: { type: "cmd", value: "", output: "Enter Password" },
        });
        clearInput();
        dispatch({ type: "SET_LOADING", payload: false });
        dispatch({ type: "SET_WAITING_PASSWORD", payload: true });
      }, 1500);
    } else if (val === "ls") {
      addOutput(TERMINAL_OPTIONS.map((opt) => opt.label));
      clearInput();
    } else if (val === "ls archive") {
      addOutput(ARCHIVE_SECTIONS);
      clearInput();
    } else if (val === "clear") {
      dispatch({ type: "CLEAR_OUTPUT" });
      clearInput();
    } else if (val === "help") {
      addOutput([
        "ls",
        "ls archive",
        "cat .",
        "cat [file]",
        "cat archive/[file]",
        "help",
        "clear",
      ]);
      clearInput();
    } else if (val === "cat .") {
      navigateAndClear("root");
    } else if (["cat bio", "cat archive"].includes(val)) {
      navigateAndClear(val.replace("cat ", ""));
    } else if (val.startsWith("cat archive/")) {
      const section = val.replace("cat archive/", "");
      if (ARCHIVE_SECTIONS.includes(section)) {
        navigateAndClear(`archive/${section}`);
      } else {
        addOutput(
          `archive file "${section}" not found. Use 'ls archive' to see available files.`
        );
        clearInput();
      }
    } else if (val === "cat") {
      addOutput("Usage: cat [file] or cat archive/[file]");
      clearInput();
    } else if (TERMINAL_OPTIONS.some((opt) => opt.label === val)) {
      dispatch({ type: "APPEND_OUTPUT", payload: { type: "cmd", value: val } });
      clearInput();
    } else if (val.length > 0) {
      addOutput(
        `"${val}" is not a command. Use 'help' for a list of commands.`
      );
      clearInput();
    }
  };

  const handleInput = (e) => {
    dispatch({ type: "SET_VALUE", payload: e.target.innerText });

    const sel = window.getSelection();
    if (sel && sel.anchorNode === e.target.firstChild) {
      dispatch({ type: "SET_CARET", payload: sel.anchorOffset });
    } else {
      dispatch({ type: "SET_CARET", payload: e.target.innerText.length });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCommand(state.terminalValue);
      return;
    }

    setTimeout(() => {
      const el = inputRef.current;
      if (el) {
        const sel = window.getSelection();
        if (sel && sel.anchorNode === el.firstChild) {
          dispatch({ type: "SET_CARET", payload: sel.anchorOffset });
        } else {
          dispatch({ type: "SET_CARET", payload: el.innerText.length });
        }
      }
    }, 0);
  };

  return {
    state,
    inputRef,
    terminalInnerRef,
    handleInput,
    handleKeyDown,
  };
}
