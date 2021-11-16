import React, { useState } from "react";
import "../styles/Home.css";
import SideBarHome from "./SidebarHome";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Booking from "./Booking";
import About from "./About";
import Footer from "./Footer";

function Home() {
  const [showBooking, isShowingBooking] = useState(false);

  return (
    <>
      <div className="home-container" id="home">
        <SideBarHome></SideBarHome>
        <div className="home-inside-container">
          <div className="home-glassy-container">
            <h1 className="home-title"> Physiotherapy Clinic </h1>
            <Carousel>
              <Carousel.Item className="carousel-item">
                <p className="home-paragraph">
                  I can help you recover with injuries sustained from surgery,
                  illness, ageing or disability. ... Physiotherapists work to
                  diagnose the causes of injury and put together a treatment
                  plan, sometimes including exercises, manual therapy and
                  electrotherapy (using electrical energy as a medical
                  treatment).
                </p>
              </Carousel.Item>
              <Carousel.Item className="carousel-item">
                <p className="home-paragraph">
                  I can help you recover with injuries sustained from surgery,
                  illness, ageing or disability. ... Physiotherapists work to
                  diagnose the causes of injury and put together a treatment
                  plan, sometimes including exercises, manual therapy and
                  electrotherapy (using electrical energy as a medical
                  treatment).
                </p>
              </Carousel.Item>
              <Carousel.Item className="carousel-item">
                <p className="home-paragraph">
                  I can help you recover with injuries sustained from surgery,
                  illness, ageing or disability. ... Physiotherapists work to
                  diagnose the causes of injury and put together a treatment
                  plan, sometimes including exercises, manual therapy and
                  electrotherapy (using electrical energy as a medical
                  treatment).
                </p>
              </Carousel.Item>
            </Carousel>

            <button
              onClick={() => isShowingBooking(true)}
              className="booking-time-btn"
            >
              Book an appointment now
            </button>
            <Booking
              show={showBooking}
              onHide={() => isShowingBooking(false)}
            />
          </div>
        </div>
      </div>
      <div id="about">
        <About></About>
      </div>
      <div></div>
      <div id="contact">
        <Footer></Footer>
      </div>
    </>
  );
}

export default Home;
