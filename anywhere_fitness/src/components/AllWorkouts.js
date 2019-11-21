import React, {useState, useEffect} from 'react';
import {Wrapper} from './ClientDashList';
import ClientDashCard from './ClientDashCard';
import axios from 'axios'


const AllWorkouts = (props)=> {
    const [workouts, setWorkouts] = useState([])

    useEffect(() => {
        axios
            .get("https://anywhere--fitness.herokuapp.com/classes")
            .then(response => setWorkouts(response.data))
    }, [])

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
              showAddButton={true}
            />
          ))}
           
        </Wrapper>
      )
}


export default AllWorkouts