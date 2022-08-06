import "./ContactList.css";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import ContactItem from "./ContactItem/ContactItem";
import axios from "axios";
function ContactList() {
  const [listContact, setListContact] = React.useState([]);

  const fetchListContact = async () => {
    await axios.get(`http://localhost:8080/all`).then((data) => {
      setListContact(data.data);
    });
  };

  React.useEffect(() => {
    fetchListContact();
  }, []);
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {
      listContact.map((item) => {
        return<>
         <ContactItem contact={item} />;
         <Divider variant="inset" component="li" />
         </>
      })
      }

     
    </List>
  );
}

export default ContactList;
