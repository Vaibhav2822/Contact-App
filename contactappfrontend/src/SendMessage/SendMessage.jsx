import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const SendMessage = () => {
  const { state } = useLocation();
  const [message, setMessage] = useState(
    "Hi, Your OTP is : " + Math.floor(100000 + Math.random() * 900000)
  );
  console.log(message);
  const sendOtp = async () => {
    const { data } = await axios({
      method: "post",
      url: "http://localhost:8080/sms/sendOTP",
      data: {
        phoneNumber: state.phoneNumber,
        msg: message,
      },
    });
    console.log(data);
  };
  console.log(state.phoneNumber);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>SEND MESSAGE</h1>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled
        style={{border:"none", backgroundColor:"transparent",fontSize:"18px"}}
      ></input>
      <br></br>
      <button
        onClick={() => sendOtp()}
        style={{
          width: "18%",
          paddingTop: "10px",
          paddingBottom: "10px",
          marginTop: "10px",
          marginRight:"15px",
          borderRadius: "5px",
          backgroundColor: "yellowgreen",
          border: "none",
          fontSize: "18px",
          fontFamily: "sans-serif",
          fontWeight: "bold",
          fontStyle: "italic",
        }}
      >
        Send Message
      </button>
    </div>
  );
};

export default SendMessage;
