import React, {useState, useEffect} from "react";
import ClientDashCard from './ClientDashCard';
import axios from "axios";
import styled from 'styled-components'

const ClientDashList = (props)=> {
  const [workouts, setWorkouts] = useState([]);
  const id = props.id || "20d97807-3560-47db-8fb0-b4801ddf421f";
  
  useEffect(() => {
    axios
      .get(`https://anywhere--fitness.herokuapp.com/sessions/client/${id}`)
      .then((response)=> setWorkouts(response.data))
      
  }, [props.id])
  // 
  return (
    <Wrapper>
      {workouts.map((workout)=> (
        <ClientDashCard 
          key={workout.id}
          id={workout.id}
          name={workout.name} 
          date={workout.dateTime} 
          duration={workout.duration} 
          intensity={workout.intensity} 
          location={workout.location} 
          showRemoveButton={true}
        />
      ))}
       
    </Wrapper>
  )
}

// const dummyData = [
//   {
//     id: "1",
//     image: "",
//     name: "Yoga",
//     time: "02:30 pm",
//     date: "11/19/19",
//     duration: "30 Min",
//     intesity: "High",
//     location: "20160 west dixie"
//   },
//   {
//     id: "2",
//     image: "",
//     name: "Cross fit",
//     time: "04:30 pm",
//     date: "11/15/19",
//     duration: "20 Min",
//     intesity: "High",
//     location: "1010 east dixie"
//   }
// ]

export const Wrapper = styled('div')`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

export default ClientDashList