import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field as Field_ } from 'formik';
import styled from 'styled-components';
import axios from 'axios';
import * as Yup from 'yup';
import { axiosWithAuth } from '../utils/AxiosWithAuth';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 30%;
  margin: 150px auto;
  padding-top: 50px;
  padding-bottom: 50px;
  border: 10px solid #f29148;
  border-radius: 25px;
`;
const H = styled('h1')`
  color: #585858;
  font-size: 3rem;
`;

const Hl = styled('p')`
  color: #585858;
  font-size: 1.6rem;
`;

const Title = styled('div')``;
const Field = styled(Field_)`
  width: 50%;
  height: 25px;
  margin-top: 1.8rem;
`;

const FieldWrapper = styled('div')`
  height: 70px;
  display: flex;
  justify-content: space-between;
  margin: 0 10%;
`;
const P = styled('p')`
  display: flex;
  justify-content: flex-end;
  width: 85%;
  margin: 0;
  color: red;
`;

const Button = styled('button')`
  width: 50%;
  padding: 10px 32px;
  font-size: 1.6rem;
  margin: 2rem auto;
  text-decoration: none;
  border-radius: 15px;
  border: 4px solid #2f91eb;
  color: #2f91eb;
  :hover {
    background-color: #2f91eb;
    color: white;
  }
`;

const NewUser = ({ values, props, errors, touched, status }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    status && setUser(user => [...user, status]);
  }, [status]);

  const onSubmit = values => {
    axiosWithAuth()
      .post('/auth/register', values)
      .then(response => {
        localStorage.setItem('token', response.data.token);
        props.history.push('/CoachDashBoard');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <Form>
        <Container>
          <Title>
            <H>Register</H>
          </Title>
          <FieldWrapper>
            <Hl>First Name : </Hl>
            <Field type='text' name='fName' placeholder='Required' />
          </FieldWrapper>
          {touched.fName && errors.fName && <P className='error'>{errors.fName}</P>}
          <FieldWrapper>
            <Hl>Last Name : </Hl>
            <Field type='text' name='lName' placeholder='Required' />
          </FieldWrapper>
          {touched.lName && errors.lName && <P className='error'>{errors.lName}</P>}
          <FieldWrapper>
            <Hl>Username : </Hl>
            <Field type='text' name='username' placeholder='Required' />
          </FieldWrapper>
          {touched.username && errors.username && <P className='error'>{errors.username}</P>}
          <FieldWrapper>
            <Hl>Password : </Hl>
            <Field type='password' name='password' placeholder='Min 8 characters' />
          </FieldWrapper>
          {touched.password && errors.password && <P className='error'>{errors.password}</P>}
          <FieldWrapper>
            <Hl>Confirm Pass : </Hl>
            <Field type='password' name='confirmPass' placeholder='Confirm Password' />
          </FieldWrapper>
          {touched.confirmPass && errors.confirmPass && <P className='error'>{errors.confirmPass}</P>}
          <FieldWrapper>
            <Hl>Email : </Hl>
            <Field type='email' name='email' placeholder='Vaild email' />
          </FieldWrapper>
          {touched.email && errors.email && <P className='error'>{errors.email}</P>}
          <FieldWrapper>
            <Hl>Coach Code : </Hl>
            <Field type='text' name='coachCode' placeholder='Required if you are a coach' />
          </FieldWrapper>
          {touched.coachCode && errors.coachCode && <P className='error'>{errors.coachCode}</P>}

          <Button>Register</Button>
          {user.map(user => (
            <div>
              <p>
                Thank you {user.fName} confirmation sent to {user.email}
              </p>
            </div>
          ))}
        </Container>
      </Form>
    </div>
  );
};
const FormikNewUser = withFormik({
  mapPropsToValues({ fName, lName, username, email, password, coachCode, confirmPass }) {
    return {
      fName: fName || '',
      lName: lName || '',
      username: username || '',
      password: password || '',
      confirmPass: confirmPass || '',
      email: email || '',
      coachCode: coachCode || '',
    };
  },

  validationSchema: Yup.object().shape({
    fName: Yup.string().required('*Required'),
    lName: Yup.string().required('*Required'),
    username: Yup.string().required('*Required'),
    password: Yup.string()
      .min(8, '* must have at least 8 characters')
      .required('*Required'),
    confirmPass: Yup.string().when('password', {
      is: val => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref('password')], 'Both password need to be the same'),
    }),
    email: Yup.string()
      .email('* Email not valid')
      .required('*Required'),
    coachCode: Yup.string(),
  }),

  handleSubmit(values, { setStatus }) {
    axiosWithAuth()
      .post('/register', values)
      .then(response => {
        console.log(response);
        setStatus(response.data);
      })
      .catch(error => console.log(error.response));
  },
})(NewUser);

export default FormikNewUser;
