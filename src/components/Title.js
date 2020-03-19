import React from "react";
import styled from "styled-components";

//styled components
const Date = styled.h5 `
margin-bottom: 20%;
font-size: 7em;
color: rgb(211,211,211,.3);
border: 1px dotted red;
font-family: 'Montserrat', sans-serif;
`

const ApodTitle = styled.h1 `
margin: 0 10% 0 10%;
font-size: 3.5em;
color: rgb(211,211,211,.3);
border: 1px dotted red;
font-family: 'Montserrat', sans-serif;
`

const ToggleDesc = styled.button `
background: none;
color: rgb(211,211,211,.3);
font-size: 1.5em;
  margin: 1em 42.5% 0 42.5%;
  padding: 0.25em 1em;
  border: 2px solid rgb(211,211,211,.3);
  border-radius: 3px;
`

const Desc = styled.h4 `
font-size: 1em;
color: rgb(65,105,225);
border: 1px dotted red;
font-family: 'Montserrat', sans-serif;
`

const Title = ({apod}) => (
    <>
   <Date>{apod.date}</Date>
    <ApodTitle>{apod.title}</ApodTitle>
   <ToggleDesc>Read More</ToggleDesc>
   <Desc>{apod.explanation}
   </Desc>
   </>
)
export default Title;

