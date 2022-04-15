import React, { useState } from 'react';
import styled from 'styled-components';

const BigWrapper = styled.div`
  position: 'fixed';
  width: '100%';
  height: '100%';
  backgroundColor: 'rgba(0, 0, 0, 0.2)';
`;

const ModalWrapper = styled.div`
position: absolute;
left: 30%;
border: 3px solid #000;
background-color: #fff;
z-index: 3;
`;

const StyledTextInput = styled.input`
font-weight: bold;
padding: 5px;
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
font-weight: bold;
text-align: center;
height: 31px;
padding: 8px 16px;
// border-radius: 1px;
border: none;
background: #fff;
color: #141414;
font-size: 14px;
cursor: pointer;
`;

export default function NewQuestion({ prodName, setAddedQuestion }) {
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const emailChecker = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = (event) => {
    const isValidEmail = emailChecker(name);
    console.log(isValidEmail);
    if ((body.length > 0 && name.length > 0) && isValidEmail) {
      setAddedQuestion({
        name: name,
        body: body,
        email: email,
      });
    } else {
      alert("You must enter the following");
    }
  };

  return (
    <BigWrapper>
    <ModalWrapper>
      <h2>Ask Your Question</h2>
      <h4>
        About the&nbsp;
        {prodName}
      </h4>
      <form onSubmit={handleSubmit}>
        <StyledBodyInput type="text" placeholder="Why did you like the product or not?" value={body} onChange={(e) => setBody(e.target.value)} />
        <div>&nbsp;</div>
        <StyledTextInput type="textarea" placeholder="Example: jackson11!" value={name} onChange={(e) => setName(e.target.value)} />
        <p>For privacy reasons, do not use your full name or email address</p>
        <StyledTextInput type="textarea" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.email)} />
        <p>For authentication reasons, you will not be emailed.</p>
        <StyledButton type="submit" value="Submit Question">Submit</StyledButton>
      </form>
    </ModalWrapper>
    </BigWrapper>
  );
}
