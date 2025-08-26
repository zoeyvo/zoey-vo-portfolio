// ArchiveRecipes.jsx
import React from "react";

function ArchiveRecipes() {
 

  return (
    <div className="grid-cell cell1">
      <div className="archive-content">
        <span className="archive-title">~/archive/recipes</span>
        <div style={{ fontFamily: 'Typewriter, monospace', marginTop: '0.5em', fontSize: '1rem', opacity: 0.8 }}>
          yummy enchilada | https://www.thismamacooks.com/2020/11/chicken-enchilada-casserole-recipe.html
        </div>
      </div>
    </div>
  );
}

export default ArchiveRecipes;
