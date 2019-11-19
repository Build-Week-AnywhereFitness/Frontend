import React from "react";
import ClientDashCard from './ClientDashCard';
//import axios from "axios";
import styled from 'styled-components'

const ClientDashList = ()=> {
  
  return (
    <Wrapper>
      
        <ClientDashCard 
            key= "1"//{workout.id} 
            image=""//{workout.image} 
            name="Yoga"//{workout.name} 
            time="02:30 pm"//{workout.time} 
            date="11/19/19"//{workout.date} 
            duration="30 Min"//{workout.duration} 
            intesity="High"//{workout.intesity} 
            location="20160 west dixie"//{workout.location} 
            
            />
       
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

export default ClientDashList