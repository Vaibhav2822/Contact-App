import axios from "axios";
import { useEffect, useState } from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ContactItem from './ContactItem/ContactItem'
const ListOfMessages = () => {
  const [listMessage, setListMessage] = useState([]);

  const fetchListMessage = async () => {
    await axios.get(`http://localhost:8080/sms/all`).then((data) => {
      setListMessage(data.data);
      console.log(data.data);
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
              <Divider variant="inset" component="li" />
            </>
          )
        })}
      </List>
    </>
  );
};
export default ListOfMessages;
