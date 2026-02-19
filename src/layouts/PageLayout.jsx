import { useEffect } from "react";
import CursorTrail from "../components/CursorTrail";
import { getAssetUrl } from "../utils/constants";

/**
 * PageLayout is a minimal wrapper for all non-landing pages.
 * - Renders the Navi header, cursor trail, header, children, and footer.
 * - Preloads all major assets (images, fonts, PDF) for instant navigation.
 * - All layout and sizing is handled by SCSS for consistency.
 */

function PageLayout({ children }) {
  // Preload all major assets for instant navigation
  useEffect(() => {
    const assets = [
      "assets/images/navi.png",
      "assets/images/lain.gif",
      "assets/images/static.gif",
      "assets/fonts/typewriter.ttf",
      "assets/cursor/cursor.cur",
    ];

    assets.forEach((asset) => {
      const ext = asset.split(".").pop();
      if (["png", "gif", "jpg", "jpeg", "cur"].includes(ext)) {
        const img = new window.Image();
        img.src = getAssetUrl(asset);
      } else if (["ttf", "woff", "woff2", "otf"].includes(ext)) {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "font";
        link.href = getAssetUrl(asset);
        link.crossOrigin = "anonymous";
        document.head.appendChild(link);
      }
    });
  }, []); // Preload Navi image for instant display
  useEffect(() => {
    const naviImg = new window.Image();
    naviImg.src = getAssetUrl("assets/images/navi.png");
  }, []);

  return (
    <div className="root">
      {/* Navi header bar with pixel-art icon */}
      <div className="header-navi">
        {" "}
        <div className="navi-img-wrapper">
          {" "}
          <img
            className="navi-img"
            src={getAssetUrl("assets/images/navi.png")}
            alt="Navi icon"
          />
        </div>
      </div>
      <CursorTrail />
      <header className="header"></header>
      {children}
      <footer className="footer">
        <span>
          <a
            href="https://github.com/zoeyvo"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/zoeyvo
          </a>
          {" | "}
          <a
            href="https://www.linkedin.com/in/zoeyvo"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/zoeyvo
          </a>
          {" | "}
          <span className="footer-email" title="Email (obfuscated)">
            <a
              href="https://mail.google.com/mail/?view=cm&to=zoeyvo256@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              zoeyvo256<span className="at-symbol">@</span>gmail.com
            </a>
          </span>
        </span>
      </footer>
    </div>
  );
}

export default PageLayout;
