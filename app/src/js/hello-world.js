import React from 'react';

const formatName = (user) => user.firstName + ' ' + user.lastName;
const HelloWorld = ({user}) => {
  return (
    <div>
      <h1 tabIndex="0"
          title={formatName(user)}>
        Hello, {formatName(user)}!
      </h1>
      <h2>Good to see you here.</h2>
    </div>
  );
}

export default HelloWorld;
