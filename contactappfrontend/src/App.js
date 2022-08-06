import React from 'react';
import './App.css';
import HomePage from './HomePage';
import ContactList from './ContactList';
import ListOfMessages from './ListOfMessages';
import SendMessage from './SendMessage/SendMessage';
import{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/all" element={<ContactList />}></Route>
            <Route path='/allMessages' element={<ListOfMessages />}></Route>
            <Route path='/sendMessage' element={<SendMessage />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
} 

export default App;
