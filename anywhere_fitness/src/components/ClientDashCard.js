import React,{useState, useEffect} from "react";
import axios from 'axios';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export default function ClientDashCard(props) {
  const [message, setMessage] = useState('');
  
  const addWorkout = ()=> {
    axios
      .post("https://anywhere--fitness.herokuapp.com/sessions/client", {
        client_id: window.currentUser,
        workout_id: props.id
      })
      .then(({data})=> setMessage(data.message))
      .catch(()=> setMessage("An error has occured and workout wasn't added."))
  }

  const removeWorkout = ()=> {
    axios
      .delete(`https://anywhere--fitness.herokuapp.com/sessions/client/${window.currentUser}`, {
        workout_id: props.id
      })
      .then(({data})=> setMessage(data.message))
      .catch(()=> setMessage("An error has occured and workout wasn't removed."))
  }

  return (
    <Card>
        <div>
            <h1>{props.name}</h1>
        </div>
        <DataEntry>
          <b>Date/Time:</b>
          <p>{props.date}</p>
        </DataEntry>
        
        <DataEntry>
          <b>Duration:</b>
          <p>{props.duration}</p>
        </DataEntry>
        
        <DataEntry>
          <b>Intensity:</b>
          <p>{props.intensity}</p>
        </DataEntry>

        <DataEntry>
          <b>Location:</b>
          <p>{props.location}</p>
        </DataEntry>

        {props.showAddButton && (
          <Button
            type="submit" fullWidth variant="contained" color="primary" onClick={addWorkout}>
              Sign up for this workout
          </Button>
        )}
        {props.showRemoveButton && (
          <Button
            type="submit" fullWidth variant="contained" color="secondary" onClick={removeWorkout}>
              Remove this workout
          </Button>
        )}

        <div>{message}</div>
    </Card>
 
)}


const DataEntry = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
`


const Card = styled('div')`
  width: 300px;
  border: 1px solid #ddd;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
  border-radius: 5px;
  margin: 70px 10px;
  padding: 20px;
`

const Location = styled('div')`

`
