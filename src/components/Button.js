import React from 'react';
import '../App.css';

export default function Button(props) {
  return (
  
    <div className={props.index!=0 ?"button" :"first_button" } onClick={props.onClick}>
      {props.name}
    </div>
  );
}
