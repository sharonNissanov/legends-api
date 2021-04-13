import React from 'react';
import '../App.css';
//this function creates a button element with the data that received from the props
export default function Button(props) {
  return (
  
    <div className={props.index!=0 ?"button" :"first_button" } onClick={props.onClick}>
      {props.name}
    </div>
  );
}
