import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL: 'https://tabless-be.herokuapp.com/api/',
    headers: {
      Authorization: token,
    },
  });
};

// username & Password:

// password: "password2"
// username: "user2"
