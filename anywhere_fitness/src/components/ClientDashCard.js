import React from "react";
import styled from 'styled-components';

export default function ClientDashCard(props) {
  return (
    <Card>
        <Image src={props.image}/>
        <div>
            <h1>{props.name}</h1>
        </div>
        <TimeDate>
            <p>{props.time}</p>
            <p>{props.date}</p>
        </TimeDate>
        <Duration>
            <p>{props.duration}</p>
            <p>{props.intesity}</p>
        </Duration> 
        <Location>
            <p>{props.location}</p>
        </Location>
    </Card>
 
)}



const Image = styled('img')`
  border-radius: 500px;
  width: 200px;
  height: 200px;
  display: block;
  margin: 0 auto;
`

const Card = styled('div')`
  width: 300px;
  border: 3px solid #2f91eb;
  border-radius:15px;
  margin: 70px 10px;
  padding: 10px;
`
const TimeDate = styled('div')`
display:flex;
justify-content:space-around;

`
const Duration = styled('div')`
display:flex;
justify-content:space-around;

`

const Location = styled('div')`

`
