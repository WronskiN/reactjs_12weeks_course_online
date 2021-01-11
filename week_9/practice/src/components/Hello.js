import React from 'react';
import withData from '../functions/withData';

function Hello(props) {
  console.log(props);
  return (
    <h1>
      Hi {props.defaultName ? props.defaultName : props.name}! Greeting from{' '}
      {props.apiData && props.apiData.map((user) => <div>{user}</div>)}
    </h1>
  );
}

Hello.defaultProps = {
  name: '',
  city: 'London',
};

export default withData(Hello);
