import React from 'react';
import '../App.css';

export default function Button(props) {
    let i=0;

  return (
  
    <div className="button" onClick={props.onClick}>
      {props.name}
    </div>
  );
}
