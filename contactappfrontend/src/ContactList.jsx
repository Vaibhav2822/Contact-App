import "./ContactList.css";
import React,{ useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import ContactItem from "./ContactItem/ContactItem";
import axios from "axios";
import Popup from "./Popup/Popup";
function ContactList() {
  const [listContact, setListContact] = useState([]);

  const fetchListContact = async () => {
    await axios.get(`http://localhost:8080/all`).then((data) => {
      setListContact(data.data);
    });
  };
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  React.useEffect(() => {
    fetchListContact();
  }, []);
  return (
    <>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {listContact.map((item) => {
          return (
            <>
              <ContactItem
                contact={item}
                isMessage={false}
                fetch={fetchListContact}
              />
              <Divider variant="inset" component="li" />
            </>
          );
        })}
      </List>
      <button
        style={{
          width: "95%",
          alignContent: "center",
          alignItems: "center",
          marginLeft: "2.4%",
          backgroundColor: "yellowgreen",
          fontFamily: "sans-serif",
          fontStyle: "italic",
          border: "none",
          height: "40px",
          fontSize: "22px",
        }}
        onClick={()=>setIsOpen(!isOpen)}

      >
        Add Contact
      </button>
      {isOpen && <Popup
      handleClose={togglePopup}
    />}
    </>
  );
}

export default ContactList;
