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
  useEffect(() => {
    const fetchProducts = id => {
      AxiosWithAuth()
        .get('https://anywhere--fitness.herokuapp.com/classes')
        .then(response => {
          // setProducts(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    };
    fetchProducts();
  }, []);

  // PUT  REQUEST 👇

  // putMessage = classes => {
  //   AxiosWithAuth.put('https://anywhere--fitness.herokuapp.com/classes/:id', classes)
  //     .then(response => {
  //       this.setState({
  //         putSuccessMessage: response.data.successMessage,
  //         putError: '',
  //       });
  //     })
  //     .catch(err => {
  //       this.setState({
  //         putSuccessMessage: '',
  //         putError: err.response.data.Error,
  //       });
  //     });
  // };

  // DELETE REQUEST 👇

  // const deleteItem = (id) => {
  // 	axiosWithAuth()
  // 		.delete(`/classes/{id}`)
  // 		.then((response) => {
  // 			fetchInventory();
  // 			console.log(deleteItem);
  // 		})
  // 		.catch((err) => console.log(err));
  // };

  return (
    <content>
      <NavBar />
      <h1>
        Welcome {user.first_name} {user.last_name}
      </h1>
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
