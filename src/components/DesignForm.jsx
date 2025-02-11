import React, { useState } from "react";
import "../index.css"; // Import the CSS file

const DesignPage = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];

    if (uploadedFile) {
      if (!uploadedFile.name.endsWith(".igs") && !uploadedFile.name.endsWith(".iges")) {
        alert("Invalid file type. Please upload a .igs or .iges file.");
        return;
      }

      if (uploadedFile.size > 5 * 1024 * 1024) {
        alert("File size exceeds 5MB limit. Please upload a smaller file.");
        return;
      }

      setFile(uploadedFile);
    }
  };

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">DCONTOUR LITETECH</h1>
        <input type="file" accept=".igs,.iges" onChange={handleFileUpload} className="file-input" />
        {file && (
          <div className="file-info">
            <span>{file.name}</span>
            <span>({(file.size / 1024).toFixed(2)} KB)</span>
          </div>
        )}
      </nav>

      <div className="content">
        {/* Left Panel */}
        <div className="left-panel">
          <div className="header">
            <button className="back-button">
              <i className="fas fa-arrow-left"></i> 
            </button>
            <button className="logout-button"></button>
          </div>
          
        <h1>Design Parameters</h1>
          <div className="form-section">
          <h2>Position & Direction</h2>
            {/* X Position */}
            <div className="input-group">
              <h4>source posiion</h4>
              <div className="input-row">
                <h2>X</h2>
                <input type="text" value="0" />
                <h2>Y</h2>
                <input type="text" value="0" />
                <h2>Z</h2>
                <input type="text" value="0" />
              </div>
            </div>

            {/* Optical Direction */}
            <div className="input-group">
              <h2>Optical Direction</h2>
              <div className="input-row">
                <input type="text" value="1" />
                <input type="text" value="0" />
                <input type="text" value="1" />
              </div>
            </div>

            {/* Orientation */}
            <div className="input-group">
              <h2>Orientation</h2>
              <div className="input-row">
                <input type="text" value="0" />
                <input type="text" value="1" />
                <input type="text" value="0" />
              </div>
            </div>

            {/* Dimensions - Single Row */}
            <div className="dimensions">
              <h2>Dimensions</h2>
              <div className="slider-container">
                {[
                  { label: "Lens Depth", value: "2", min: "1", max: "10" },
                  { label: "Inner Diameter", value: "4", min: "1", max: "10" },
                  { label: "Draft Angle (*)", value: "5", min: "1", max: "10" },
                  { label: "Edge Thickness", value: "0.05", min: "0.01", max: "1", step: "0.01" },
                  { label: "Edge Distance", value: "0.05", min: "0.01", max: "1", step: "0.01" },
                  { label: "Refractive Index", value: "1.586", min: "1", max: "2", step: "0.01" }
                ].map(({ label, value, min, max, step }) => (
                  <div key={label} className="slider-group">
                    <label>{label}</label>
                    <input type="range" min={min} max={max} step={step || "1"} defaultValue={value} />
                    <input type="text" value={value} className="text-input" />
                  </div>
                ))}
              </div>
            </div>

            {/* Create Design Button */}
            <button className="create-design">Create Design</button>
          </div>
        </div>

        {/* Right Panel */}
        <div className="right-panel">
          <img
            src="https://storage.googleapis.com/a1aa/image/m86FJ2Uf-mrfwXSdtQcsBJBLhDVm3ikv-cBvb402tnM.jpg"
            alt="Design preview"
          />
        </div>
      </div>
    </div>
  );
};

export default DesignPage;
