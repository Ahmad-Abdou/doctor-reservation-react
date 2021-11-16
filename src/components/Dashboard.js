import React, { useState, useEffect } from "react";
import "../styles/Dashboard.css";
import axios from "axios";
import SideBar from "./SideBar";
// import { MdModeEdit, MdDelete } from "react-icons/md";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdAccessTime } from "react-icons/md";
function Dashboard() {
  const [patient, setPatient] = useState([]);
  const [dates, setDates] = useState("");
  const [times, setTimes] = useState("");
  const [timeArray, setTimeArray] = useState([]);
  const [fetchedDates, setFetchedDates] = useState([]);

  const fetchingPatient = () => {
    axios
      .get(`http://localhost:8080/api/v1/patient`)
      .then((res) => {
        setPatient(res.data);
      })
      .catch((err) => {});
  };
  const fetchingDates = () => {
    axios
      .get(`http://localhost:8080/api/v1/dates`)
      .then((res) => {
        setFetchedDates(res.data);
      })
      .catch((err) => {});
  };

  const datesChangeHandler = (e) => {
    setDates((e.target.name = e.target.value));
  };
  const timeChangeHandler = (e) => {
    setTimes((e.target.name = e.target.value));
  };
  let sortedArray = timeArray.sort();

  let result = {
    status: "AVAILABLE",
    availableDates: dates,
    time: Array.from(new Set(sortedArray)),
  };

  const addingTimes = (e) => {
    e.preventDefault();
    let array = [];
    array.push(times);
    if (times === "") {
      return;
    }
    if (times < "09:00" || times > "17:00") {
      return;
    }
    setTimeArray((array) => [...array, times]);
  };

  const addintDates = (e) => {
    e.preventDefault();
    if (result.availableDates === "") {
      return;
    }
    axios
      .post("http://localhost:8080/api/v1/dates", result)
      .then((res) => {})
      .catch((err) => {});
  };

  useEffect(() => {
    fetchingPatient();
    fetchingDates();
    // }, [fetchedDates]);
  }, []);
  return (
    <div className="dashboard-container">
      <SideBar></SideBar>
      <div className="dashboard-adding-dates">
        <Form onSubmit={addintDates}>
          <input
            className="dashboard-adding-dates-field"
            type="date"
            onChange={datesChangeHandler}
            name="dates"
            value={dates}
            required
          />
          <button className="dashboard-adding-dates-btn">Add Date</button>
        </Form>
        <MdAccessTime className="dashboard-time-icon"></MdAccessTime>
        <Form onSubmit={addingTimes}>
          <select
            onChange={timeChangeHandler}
            type="times"
            name="times"
            className="dashboard-adding-time-field"
            value={times}
          >
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
          <button className="dashboard-adding-dates-btn">Add Time</button>
        </Form>
      </div>
      <div className="date-time-available-container">
        <h2 className="dashboard-dates-title">Available dates</h2>
        {fetchedDates.map((dates) => {
          const { id, availableDates, time } = dates;
          return (
            <div key={id}>
              <h5 className="dashboard-date-printed">{availableDates}</h5>
              <span className="dashboard-time-printed">{time.join(", ")} </span>
            </div>
          );
        })}
      </div>

      <div className="dates-dashboard">
        {patient.map((myPatinet) => {
          const { user, bookedDates } = myPatinet;
          const { id, firstName, lastName, personalNumber, phone } = user;
          return (
            <div key={id}>
              <p className="dashboard-user-field">{firstName}</p>
              <p className="dashboard-user-field">{lastName}</p>
              <p className="dashboard-user-field">{personalNumber}</p>
              <p className="dashboard-user-field">{phone}</p>
              <p className="dashboard-user-field">{bookedDates}</p>
              {/* <MdModeEdit className="edit-icon"></MdModeEdit>
              <MdDelete className="delete-icon"></MdDelete> */}
              <p></p>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
