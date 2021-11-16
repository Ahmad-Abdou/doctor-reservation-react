import React from "react";
import "../styles/About.css";

import "bootstrap/dist/css/bootstrap.min.css";
function About() {
  return (
    <div className="about-container">
      <div className="image-p-container">
        <img alt="" className="image-one" />
        <img alt="" className="image-two" />
        <img alt="" className="image-three" />
      </div>
      <p className="about-paragraph-one">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
        impedit iste nulla laboriosam, pariatur praesentium architecto corporis
        ab fugiat aliquid animi maxime similique magni quidem nesciunt saepe
        porro sint ullam!
      </p>
      <p className="about-paragraph-two">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
        impedit iste nulla laboriosam, pariatur praesentium architecto corporis
        ab fugiat aliquid animi maxime similique magni quidem nesciunt saepe
        porro sint ullam!
      </p>
      <p className="about-paragraph-three">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
        impedit iste nulla laboriosam, pariatur praesentium architecto corporis
        ab fugiat aliquid animi maxime similique magni quidem nesciunt saepe
        porro sint ullam!
      </p>
    </div>
  );
}

export default About;
