import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import Home from './components/Home';

//styled components
const StyledApp = styled.div`
  background: url(${props => props.apod.hdurl}) no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  overflow: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  align-content:center;
`;
function App() {
  // set apod data
  const [apod, setApod] = useState();
  // capture todays date
  const moment = require('moment');
  let todaysDate = moment().format('YYYY-MM-DD');

  //set date state
  const [date, setDate] = useState(todaysDate);
  console.log(date);

  // useEffect captures apod and sets it to state
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=VZnm5MWimNzgCAXEi7lyp7zDen0M0Rq3UWRiA2V4&date=${date}`)
      .then(response => {
        setApod(response.data);
      })
      .catch(error => console.log('no nasa photo for you', error));
  }, [date]);

  if (!apod) {
    return <h3>Loading...</h3>;
  }

  return (
    <StyledApp className="App" apod={apod}>
      <Home apod={apod} setDate={setDate} todaysDate={todaysDate} date={date}/>
    </StyledApp>
  );
}

export default App;
