import React from 'react';

const BoilingVerdict = (props) => {
  let element;
  if (props.celsius >= 100) {
    element = <p>The water would boil.</p>
  } else {
    element = <p>The water would not boil.</p>
  }
  return (
    <div className="child_test_text">
      <div className="text_title">--->1. BoilingVerdict 组件</div>
      {element}
    </div>
  )
}
export default BoilingVerdict;