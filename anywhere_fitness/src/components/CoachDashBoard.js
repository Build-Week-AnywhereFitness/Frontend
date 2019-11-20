import React, {useState,useEffect} from 'react'
import NavBar from './NavBar'
import Cards from './Cards'
import AddButton from "./AddButton"

const CoachDashBoard = (props) => {

    return (
        <content>
            <NavBar />
            <AddButton/>
            <div className="cards-container">
                <Cards />
            </div>
        </content>
    );
};

export default CoachDashBoard;