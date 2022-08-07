import axios from "axios";
import React, { useEffect, useState } from "react";

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
      url: "http://localhost:8080/",
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
          <p>Enter you First Name</p>
          <input
            type="text"
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            placeholder="First Name"
          />
          <p>Enter you Last Name</p>
          <input
            type="text"
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            placeholder="Last Name"
          />
          <p>Enter you Phone Number</p>
          <input
            type="text"
            onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
            placeholder="Phone Number"
          />
          <p>Enter you Email</p>
          <input
            type="email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Email"
          />
          <div>
            <button type="submit">Add Contact</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;
