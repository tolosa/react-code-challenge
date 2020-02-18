import React, { useState } from "react";

const Two = (props) => {
  const [activeUser, setActiveUser] = useState('Chris');

  const changeUser = () => {
    setActiveUser('Bolingo!');
  };

  return (
    <div style={{ marginBottom: "50px" }}>
      <h2>Challenge 2</h2>
      <p>Active User is: {activeUser}</p>
      <button onClick={changeUser}>Change Me!</button>
    </div>
  );
}

export default Two;
