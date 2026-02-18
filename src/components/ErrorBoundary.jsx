import { Component } from "react";

/**
 * Error Boundary component for catching React errors
 * Prevents entire app from crashing. Improves user experience during unexpected issues.
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary" style={{ padding: "20px", margin: "20px" }}>
          <h2>Something went wrong</h2>
          <p>The application encountered an unexpected error.</p>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
          {process.env.NODE_ENV === "development" && (
            <details style={{ whiteSpace: "pre-wrap" }}>
              {this.state.error?.toString()}
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
