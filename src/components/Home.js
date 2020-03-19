import React from "react";
import styled from "styled-components";
import ToggleDesc from "./ToggleDesc";
import {FaChevronLeft,FaChevronRight} from "react-icons/fa"; 
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
// arrow click handlers
function leftClickHandler() {

};

function rightClickHandler() {

};

const Home = ({apod}) => (
    <>
   <Date>
   <button><FaChevronLeft onClick = {leftClickHandler} /></button>
   {apod.date}
   <button><FaChevronRight onClick = {rightClickHandler}/></button>
   </Date>
    <ApodTitle>{apod.title}</ApodTitle>
   <ToggleDesc desc = {apod.explanation}/>
   </>
)
export default Home;

