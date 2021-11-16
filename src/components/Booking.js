import React, { useState, useEffect } from "react";
import "../styles/Booking.css";
import { Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import { MdDateRange, MdAccessTime } from "react-icons/md";
import axios from "axios";
import Calendar from "react-calendar";

function Booking(props) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [user, setUser] = useState("");

  function disableWeekends(date) {
    return date.getDay() === 0 || date.getDay() === 6;
  }

  const onchangeTimeHandler = (e) => {
    setTime((e.target.name = e.target.value));
  };

  const onchangeDateHandler = (e) => {
    setDate((e.target.name = e.target.value));
  };
  let dateTime = date + " " + time;
  let signedUser = user.toString;

  let result = { bookedDates: dateTime, user: signedUser };

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:8080/api/v1/patient`, result)
      .then((res) => {})
      .catch((err) => {});
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/register/myuser`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="booking-container">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-asd"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h2 className="modal-title">Booking an appointment</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitHandler} className="date-container">
            <input
              type="date"
              onChange={onchangeDateHandler}
              className="months-days"
              name="date"
              value={date}
              required
            ></input>
            <MdAccessTime className="booking-time-icon"></MdAccessTime>
            <select
              onChange={onchangeTimeHandler}
              type="time"
              name="time"
              className="custom-time"
              value={time}
              required
            >
              <option disabled className="option-time" value="">
                HH:MM
              </option>
              <option className="option-time" value="09:30">
                09:30
              </option>
              <option className="option-time" value="10:00">
                10:00
              </option>
              <option className="option-time" value="10:30">
                10:30
              </option>
              <option className="option-time" value="11:00">
                11:00
              </option>
              <option className="option-time" value="11:30">
                11:30
              </option>
              <option className="option-time" value="13:00">
                13:00
              </option>
              <option className="option-time" value="13:30">
                13:30
              </option>
              <option className="option-time" value="14:00">
                14:00
              </option>
              <option className="option-time" value="14:30">
                14:30
              </option>
              <option className="option-time" value="15:00">
                15:00
              </option>
              <option className="option-time" value="15:30">
                15:30
              </option>
              <option className="option-time" value="16:00">
                16:00
              </option>
              <option className="option-time" value="16:30">
                16:30
              </option>
            </select>
            <div className="show-date-time-container">
              <MdDateRange className="date-icon"></MdDateRange>
              <MdAccessTime className="time-icon"></MdAccessTime>
              <span className="date-printed"> {date}</span>

              <span className="time-printed"> {time}</span>
            </div>
            <button className="submit-date-time-btn">submit</button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Booking;
