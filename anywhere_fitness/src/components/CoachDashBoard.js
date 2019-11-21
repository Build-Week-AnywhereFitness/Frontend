import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Cards from './Cards';
import AddButton from './AddButton';
import { Link } from 'react-router-dom';

const CoachDashBoard = props => {
  // useEffect(() => {
  //   const fetchProducts = id => {
  //     axiosWithAuth()
  //       .get('https://bw-farm-fresh-produce.herokuapp.com/api/farms')
  //       .then(response => {
  //         setProducts(response.data);
  //         console.log(response.data);
  //       })
  //       .catch(error => {
  //         console.error(error);
  //       });
  //   };
  //   fetchProducts();
  // }, []);

  return (
    <content>
      <NavBar />
      <AddButton />
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
