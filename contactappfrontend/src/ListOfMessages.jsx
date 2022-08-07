import axios from "axios";
import { useEffect, useState } from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ContactItem from './ContactItem/ContactItem'
const ListOfMessages = () => {
  const [listMessage, setListMessage] = useState([]);

  const fetchListMessage = async () => {
    await axios.get(`http://localhost:8080/sms/all`).then((data) => {
      const val = data.data;
      val.reverse();
      setListMessage(val);
    });
  };

  useEffect(() => {
    fetchListMessage();
    console.log(listMessage);
  }, []);
  

  return (
    <>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {listMessage.map((item) => {
          return (
            <>
              <ContactItem contact={item} isMessage={true} />
              <p style={{marginLeft:"75px",marginTop:"-1%"}}>{item.date}</p>
              <Divider variant="inset" component="li" />
            </>
          )
        })}
      </List>
    </>
  );
};
export default ListOfMessages;
