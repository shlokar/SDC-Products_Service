import React, { useState } from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.span`
position: absolute;
left: 30%;
border: 3px solid #000;
background-color: #fff;
z-index: 3;
`;

const StyledTextInput = styled.input`
font-weight: bold;
border-style: solid;
border-width: 1px;
border-color: black;
width: 95%;
height: 20px;
padding-left: 15px;
background-repeat: no-repeat;
`;

const StyledBodyInput = styled.textarea`
postion: relative;
font-weight: bold;
border-style: solid;
border-width: 1px;
border-color: black;
width: 95%;
height: 200px;
padding-left: 15px;
`;

const StyledButton = styled.button`
// min-width: 100px;
padding: 8px 16px;
// border-radius: 1px;
border: solid;
background: #fff;
color: #141414;
font-size: 16px;
cursor: pointer;
`;

export default function NewAnswer() {
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const emailChecker = (inputEmail) => String(inputEmail)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

  const handleSubmit = () => {
    const isValidEmail = emailChecker(name);
    console.log(isValidEmail);
    if ((body.length > 0 && name.length > 0) && isValidEmail) {
      // clear form
    } else {
      alert('You must enter the following:');
    }
  };

  return (
    <ModalWrapper>
      <h2>Add Your Answer</h2>
      <h4>About the (product name here)</h4>
      <form onSubmit={handleSubmit}>
        <StyledBodyInput type="textarea" placeholder="Your Answer Here" value={body} onChange={(e) => setBody(e.target.value)} />
        <div>&nbsp;</div>
        <StyledTextInput type="textarea" placeholder="Example: jack543!" value={name} onChange={(e) => setName(e.target.value)} />
        <p>For privacy reasons, do not use your full name or email address</p>
        <StyledTextInput type="textarea" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.email)} />
        <p>For authentication reasons, you will not be emailed.</p>
        <StyledButton type="submit" value="Submit Answer">Submit</StyledButton>
      </form>
    </ModalWrapper>
  );
}
