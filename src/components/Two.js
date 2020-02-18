import React, { useState } from "react";

const Two = (props) => {
  const [user, setUser] = useState({ activeUser: 'Chris' });

  const changeUser = () => {
    setUser({ activeUser: 'Bolingo!' });
  };

  return (
    <div style={{ marginBottom: "50px" }}>
      <h2>Challenge 2</h2>
      <p>Active User is: {user.activeUser}</p>
      <button onClick={changeUser}>Change Me!</button>
    </div>
  );
}

export default Two;
