import React from "react";
import { Link } from "react-router-dom";
import ReactImage1 from "../assets/sesaat.png";
import ReactImage2 from "../assets/mid.png";
import ReactImage3 from "../assets/equality.png";

const YourvoiceUpdate = () => {
  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div>
      <div className="column">
        <div className="row">
          <div className="col-4">
            <img
              className="gambar"
              src={ReactImage3}
              alt="Equality vs Equity"
            />
            <div className="layer" />
            <button
              className="btn"
              onClick={() =>
                handleClick(
                  "https://www.instagram.com/p/CwXDEmVO6yX/?img_index=1"
                )
              }
            >
              Click To See
            </button>
          </div>
          <div className="col-4">
            <div className="layer" />
            <img className="gambar" src={ReactImage2} alt="Kekerasan" />
            <button
              className="btn"
              onClick={() =>
                handleClick("https://www.instagram.com/p/CuesDn2yeqW/")
              }
            >
              Click To See
            </button>
          </div>
          <div className="col-4">
            <img
              className="gambar"
              src={ReactImage1}
              alt="Menumbuhkan Kepedulian"
            />
            <div className="layer" />
            <button
              className="btn"
              onClick={() =>
                handleClick("https://www.instagram.com/p/CueqvmvySOc/")
              }
            >
              Click To See
            </button>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>©YourvoiceIdn - 2023</p>
      </div>
    </div>
  );
};

export default YourvoiceUpdate;
