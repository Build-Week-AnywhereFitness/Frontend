import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field as Field_ } from 'formik';
import styled from 'styled-components';
import axios from 'axios';
import * as Yup from 'yup';

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

const NewUser = ({ values, errors, touched, status }) => {
  const [user, setUser] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (status) {
      setMessage(status.message);
      setUser(user => [...user, status.data[0]]);
    }
  }, [status]);

  return (
    <div>
      <Form>
        <Container>
          <Title>
            <H>Register</H>
          </Title>
          <FieldWrapper>
            <Hl>First Name : </Hl>
            <Field type='text' name='first_name' placeholder='Required' />
          </FieldWrapper>
          {touched.first_name && errors.first_name && <P className='error'>{errors.first_name}</P>}
          <FieldWrapper>
            <Hl>Last Name : </Hl>
            <Field type='text' name='last_name' placeholder='Required' />
          </FieldWrapper>
          {touched.last_name && errors.last_name && <P className='error'>{errors.last_name}</P>}
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
          <div>{message}</div>
        </Container>
      </Form>
    </div>
  );
};
const FormikNewUser = withFormik({
  mapPropsToValues({ first_name, last_name, username, email, password, coachCode, confirmPass }) {
    return {
      first_name: first_name || '',
      last_name: last_name || '',
      username: username || '',
      password: password || '',
      confirmPass: confirmPass || '',
      email: email || '',
      coachCode: coachCode || '',
    };
  },

  validationSchema: Yup.object().shape({
    first_name: Yup.string().required('Required*'),
    last_name: Yup.string().required('Required*'),
    username: Yup.string().required('Required*'),
    password: Yup.string()
      .min(8, 'must have at least 8 characters*')
      .required('Required*'),
    confirmPass: Yup.string().when('password', {
      is: val => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref('password')], 'Both password need to be the same*'),
    }),
    email: Yup.string()
      .email('* Email not valid')
      .required('Required*'),
    coachCode: Yup.string(),
  }),

  handleSubmit(values, { setStatus }) {
    axios
      .post('https://anywhere--fitness.herokuapp.com/register', values)
      .then(response => {
        console.log(response);
        setStatus(response.data);
      })
      .catch(error => console.log(error.response));
  },
})(NewUser);

export default FormikNewUser;
