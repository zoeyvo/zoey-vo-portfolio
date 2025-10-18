// ArchiveRecipes.jsx
import React from "react";

function ArchiveRecipes() {
  return (
    <div className="grid-cell">
      <div className="content">
        <span className="title">~/archive/recipes</span>
        <div>
          <br />
        </div>
        <div style={{ fontFamily: "Typewriter, monospace", fontSize: "1rem" }}>
          <a
            href="https://www.thismamacooks.com/2020/11/chicken-enchilada-casserole-recipe.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Easy Enchilada
          </a>
        </div>
      </div>
    </div>
  );
}

export default ArchiveRecipes;
