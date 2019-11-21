import React, {useState, useEffect} from "react";
import ClientDashCard from './ClientDashCard';
import axios from "axios";
import styled from 'styled-components'

const ClientDashList = (props)=> {
  const [workouts, setWorkouts] = useState(dummyData);
  
  // useEffect(() => {
  //   axios
  //     .get(`https://anywhere--fitness.herokuapp.com/workouts/${props.id}`)
  //     .then((response)=> setWorkouts(response.data))
  // }, [props.id])

  return (
    <Wrapper>
      {workouts.map((workout)=> (
        <ClientDashCard 
          key={workout.id} 
          image={workout.image} 
          name={workout.name} 
          time={workout.time} 
          date={workout.date} 
          duration={workout.duration} 
          intesity={workout.intesity} 
          location={workout.location} 
        />
      ))}
       
    </Wrapper>
  )
}

const dummyData = [
  {
    id: "1",
    image: "",
    name: "Yoga",
    time: "02:30 pm",
    date: "11/19/19",
    duration: "30 Min",
    intesity: "High",
    location: "20160 west dixie"
  },
  {
    id: "2",
    image: "",
    name: "Cross fit",
    time: "04:30 pm",
    date: "11/15/19",
    duration: "20 Min",
    intesity: "High",
    location: "1010 east dixie"
  }
]

const Wrapper = styled('div')`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

export default ClientDashList