import React from 'react';

const FancyBorder = (props) => {
  console.log('FancyBorder: ', props)
  return (
    <div className={'child_test FancyBorder-' + props.color}>
      {props.children}
    </div>
  )
}
export default FancyBorder;