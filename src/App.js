import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import styled from "styled-components"; 
import Title from './components/Title';

  //styled components
  const StyledApp = styled.div `
  background: url(${props => props.apod.hdurl}) no-repeat center center fixed;
  background-size:cover;
  height: 100vh;
  overflow: none;

display:flex; 
flex-direction:column;
justify-content:center;
align-content:center;
  `

function App() {
  // set apod data
  const [apod, setApod] = useState();
// useEffect captures apod and sets it to state
  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=VZnm5MWimNzgCAXEi7lyp7zDen0M0Rq3UWRiA2V4')
      .then(response => {
        console.log(response);
        setApod(response.data);
      })
      .catch(error => console.log('no nasa photo for you', error));
  }, []);


  if (!apod) {
    return <h3>Loading...</h3>;
  }

  return (
    <StyledApp className="App" apod = {apod}>
      <Title apod = {apod} />
    </StyledApp>
  )
}

export default App;
