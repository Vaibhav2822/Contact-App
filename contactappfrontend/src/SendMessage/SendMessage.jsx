import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";


const SendMessage = () => {
   
   const {state} = useLocation();
   const [message, setMessage] = useState("Hi, Your OTP is : "+Math.floor(100000 + Math.random() * 900000));
   console.log(message);
   const sendOtp = async () => {
      const {data} = await axios({
      method: 'post',
      url: 'http://localhost:8080/sms/sendOTP',
      data: {
         phoneNumber: state.phoneNumber,
         msg: message
      }
   })
   console.log(data);
   }
   console.log(state.phoneNumber);

   return(
      <div style={{textAlign:"center"}}>
         <h1>SEND MESSAGE</h1>
         <input type="text" value = {message} onChange = {(e) => setMessage(e.target.value)} disabled></input><br></br>
         <button onClick={() => sendOtp()}>Send Message</button>
      </div>
   )
}

export default SendMessage;