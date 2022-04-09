import React, { useState } from 'react';
// import styled from 'styled-components';

export default function NewQuestion({ addQuestion, setAddedQuestion }) {
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
    <div>
      <h2>Ask Your Question</h2>
      <h4>About the (product name here)</h4>
      <form onSubmit={handleSubmit}>
        <input type="textarea" placeholder="Why did you like the product or not?" value={body} onChange={(e) => setBody(e.target.value)} />
        <input type="textarea" placeholder="Example: jackson11!" value={name} onChange={(e) => setName(e.target.value)} />
        <p>For privacy reasons, do not use your full name or email address</p>
        <input type="textarea" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.email)} />
        <p>For authentication reasons, you will not be emailed.</p>
        <input type="submit" value="Submit Question" />
      </form>
    </div>
  );
}
