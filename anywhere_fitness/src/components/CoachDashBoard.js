import React, { useState, useEffect, useContext } from 'react';
import NavBar from './NavBar';
import Cards from './Cards';
import AddButton from './AddButton';
import { Link } from 'react-router-dom';
import AxiosWithAuth from '../utils/AxiosWithAuth';
import CoachContext from '../contexts/CoachContext';

const CoachDashBoard = props => {
  const { user } = useContext(CoachContext);
  console.log(user);
  const fetchClasses = id => {
    AxiosWithAuth()
      .get('https://anywhere--fitness.herokuapp.com/classes')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchClasses();
  }, []);

  return (
    <content>
      <NavBar />
      <h1>
        Welcome {user.first_name} {user.last_name}
      </h1>
      <AddButton fetchClasses={fetchClasses} />
      <div className='cards-container'>
        <Cards />
      </div>
      <Link to='/' onClick={() => localStorage.removeItem('token')}>
        Logout
      </Link>
    </content>
  );
};

export default CoachDashBoard;
