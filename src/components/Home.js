import React from 'react';
import styled from 'styled-components';
import ToggleDesc from './ToggleDesc';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

//styled components
const Date = styled.h1`
  font-size: 7em;
  color: rgb(211, 211, 211, 0.4);
  ${'' /* border: 1px dotted red; */}
  font-family: 'Montserrat', sans-serif;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ApodTitle = styled.h1`
  height: 2em;
  ${'' /* margin: 0 10% 0 10%; */}
  font-size: 4.5em;
  color: rgb(211, 211, 211, 0.4);
  ${'' /* border: 1px dotted red; */}
  font-family: 'Montserrat', sans-serif;
`;

const StyledLeft = styled(AiOutlineLeft)`
  border: none;
  background: none;
  font-size: 1.8em;
`;
const StyledRight = styled(AiOutlineRight)`
  border: none;
  background: none;
  font-size: 1.8em;
`;

const Home = ({ apod, setDate, date }) => {
  //click event listeners
  function leftClickHandler(e) {
    e.preventDefault();
    const moment = require('moment');
    let yesterday = moment(date)
      .subtract(1, 'days')
      .format('YYYY-MM-DD');
    setDate(yesterday);
  }

  function rightClickHandler(e) {
    e.preventDefault();
    const moment = require('moment');
    let tommorow = moment(date)
      .add(1, 'days')
      .format('YYYY-MM-DD');
    setDate(tommorow);
  }

  return (
    <>
      <Date>
        <StyledLeft onClick={leftClickHandler} />
        {apod.date}
        <StyledRight onClick={rightClickHandler} />
      </Date>
      <ApodTitle>{apod.title}</ApodTitle>
      <ToggleDesc desc={apod.explanation} />
    </>
  );
};

export default Home;
