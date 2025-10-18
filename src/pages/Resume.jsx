import { getAssetUrl } from "../utils/constants";

const Resume = () => (
  <div
    className="grid-cell"
    style={{
      minHeight: "60vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <img
      className="resume-img"
      src={getAssetUrl("assets/images/Zoey-Vo-Resume-2025.png")}
      alt="Resume - Zoey Vo"
    />
  </div>
);

export default Resume;
