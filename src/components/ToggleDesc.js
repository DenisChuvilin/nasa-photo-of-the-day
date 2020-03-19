import React, { useState } from 'react';
import styled from 'styled-components';

//styles
const StyledToggleButton = styled.button`
  background: none;
  color: rgb(65,105,225, .5);
  font-size: 1.5em;
  margin: 1em 38% 0 38%;
  padding: 0.25em 1em;
  border: 2px solid rgb(65,105,225, .5);
  border-radius: 3px;
`;

const StyledDesc = styled.h4 `
display: ${props => props.toggleStatus ? 'block':'none'};

font-size: 1em;
color: rgb(65,105,225);
${'' /* border: 1px dotted red; */}
font-family: 'Montserrat', sans-serif;
`
const ToggleDesc = ({desc}) => {
  // set toggle status in state
  const [toggle, setToggle] = useState(false);

  //handleclick function
  function handleClick() {
    setToggle(!toggle);
  }

  return (
      <>
    <StyledToggleButton onClick={() => handleClick(toggle)}>{toggle ? 'Hide Description' : 'See Description'}</StyledToggleButton>
  <StyledDesc toggleStatus = {toggle}>
      {desc}
  </StyledDesc>
  </>
  )
};

export default ToggleDesc;
