import './HomePage.css';
import React, { Component } from "react";
import { Router, Switch, Route, NavLink } from "react-router-dom";

function HomePage() {
    
    return(

        <div>
            <div className='HomePageHeader'>
            <h1>Contact App</h1>
            </div>
            
            <div className='Buttons'>
                <NavLink to={"/all"}>
                    <button className="viewAllContacts">View Contact List</button><br></br>
                </NavLink>
                <NavLink to={"/allMessages"}>
                    <button className="viewAllMessages">View All Messages</button>
                </NavLink>
            </div>
        </div>
       
    )
}

export default HomePage;