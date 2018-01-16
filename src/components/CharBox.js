import React from 'react';

const charbox = props => {
  return (
    <div className="char" onClick={props.clicked}>
      {props.char}
    </div>
  );
};

export default charbox;
