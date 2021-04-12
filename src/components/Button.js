import React from 'react';
import '../App.css';

export default function Button(props) {
  return (
    <div className="Button" onClick={props.onClick}>
      {props.name}
      {/* {console.log(props)} */}
    </div>
  );
}
