import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import React from "react";
import { NavLink } from "react-router-dom";
const ContactItem = (props) => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary={props.contact.firstName + " " + props.contact.lastName}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {props.contact.phoneNumber}
            </Typography>
            {"\t" + props.contact.email}
          </React.Fragment>
        }
      />
      <NavLink to={"/sendMessage"} state={{phoneNumber:props.contact.phoneNumber}}>
        <button
          className="message"
          style={{
            width: "120px",
            height: "50px",
            fontFamily: "sans-serif",
            fontSize: "15px",
            marginRight: "20px",
            marginTop: "5px",
            backgroundColor: "yellowgreen",
            border: "0px",
            borderRadius: "5px",
            fontStyle: "italic",
          }} 
        >
          Send Message
        </button>
      </NavLink>
    </ListItem>
  );
};
export default ContactItem;
