import React from "react";

const ValidationComponent = props => {
  return (
    <div>
      {props.length < 5 ? <p>Text too short!!</p> : <p> Text too long</p>}
    </div>
  );
};

export default ValidationComponent;
