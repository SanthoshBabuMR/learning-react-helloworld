import React from 'react';

function UserGreeting (props) {
  return <h3>Welcome back {props.user}!</h3>;
}

function GuestGreeting (props) {
  return <h3>Please sign up!</h3>;
}

function Greeting (props) {
  if (props.isUserLoggedIn) {
    return UserGreeting(props);
  } else {
    return GuestGreeting(props);
  }
}

export default Greeting;
