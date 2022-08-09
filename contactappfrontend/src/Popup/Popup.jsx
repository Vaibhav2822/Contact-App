import { textAlign } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import './Popup.css';

const Popup = (props) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const addNewContact = async () => {
    const { data } = await axios({
      method: "post",
      url: "https://contact2408.herokuapp.com/",
      data: form,
    });
    console.log(data);
  };

  useEffect(() => {
     console.log(form);
  },[form])

  const handleSubmit = () => {
    addNewContact();
  }

  return (
    <div className="popup-box">
      <div className="box">
        <h1>Add a new Contact</h1>
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <form onSubmit={() => handleSubmit()}>
          <p className="entity">Enter your First Name</p>
          <input className="input"
            type="text"
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            placeholder="First Name"
          />
          <p className="entity">Enter your Last Name</p>
          <input className="input"
            type="text"
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            placeholder="Last Name"
          />
          <p className="entity">Enter your Phone Number</p>
          <input className="input"
            type="text"
            onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
            placeholder="Phone Number"
          />
          <p className="entity">Enter your Email</p>
          <input className="input"
            type="email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Email"
          />
          <div>
            <button type="submit" className="sendMessageButton">Add Contact</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;
