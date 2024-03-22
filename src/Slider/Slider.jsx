import React from "react";
import "../Slider/Slider.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";

const Slider = () => {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <img src={img1} alt="img1" />
        </div>
        <div className="slide">
          <img src={img2} alt="img2" />
        </div>
        <div className="slide">
          <img src={img3} alt="img3" />
        </div>
        <div className="slide">
          <img src={img4} alt="img4" />
        </div>
        <div className="slide">
          <img src={img5} alt="img5" />
        </div>
        <div className="slide">
          <img src={img6} alt="img6" />
        </div>
        <div className="slide">
          <img src={img7} alt="img7" />
        </div>
        <div className="slide">
          <img src={img8} alt="img8" />
        </div>
        <div className="slide">
          <img src={img9} alt="img9" />
        </div>

        {/* same 9 images doubled */}

        <div className="slide">
          <img src={img1} alt="img1" />
        </div>
        <div className="slide">
          <img src={img2} alt="img2" />
        </div>
        <div className="slide">
          <img src={img3} alt="img3" />
        </div>
        <div className="slide">
          <img src={img4} alt="img4" />
        </div>
        <div className="slide">
          <img src={img5} alt="img5" />
        </div>
        <div className="slide">
          <img src={img6} alt="img6" />
        </div>
        <div className="slide">
          <img src={img7} alt="img7" />
        </div>
        <div className="slide">
          <img src={img8} alt="img8" />
        </div>
        <div className="slide">
          <img src={img9} alt="img9" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
