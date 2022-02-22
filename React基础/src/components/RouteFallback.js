import React from 'react';
import { Redirect } from 'react-router-dom';
const RouteFallback = (props) => {
  console.log('route fallback with location: ', props.location);
  return (
    <Redirect to={ {
      pathname: '/',
      from: props.location
    }} />
  )
}
export default RouteFallback;