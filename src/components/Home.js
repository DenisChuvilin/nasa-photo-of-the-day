import React from "react";
import styled from "styled-components";
import ToggleDesc from "./ToggleDesc";
//styled components
const Date = styled.h5 `
margin-bottom: 20%;
font-size: 7em;
color: rgb(211,211,211,.3);
${'' /* border: 1px dotted red; */}
font-family: 'Montserrat', sans-serif;
`

const ApodTitle = styled.h1 `
height: 2em;
margin: 0 10% 0 10%;
font-size: 3.5em;
color: rgb(211,211,211,.3);
${'' /* border: 1px dotted red; */}
font-family: 'Montserrat', sans-serif;
`

const Home = ({apod}) => (
    <>
   <Date>{apod.date}</Date>
    <ApodTitle>{apod.title}</ApodTitle>
   <ToggleDesc desc = {apod.explanation}/>
   </>
)
export default Home;

