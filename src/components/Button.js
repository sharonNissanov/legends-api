import React from 'react';

export default function Button(props) {
  return (
    <div style={{backgroundColor:"red"}} onClick={props.onClick}>
      {props.name}
      {/* {console.log(props)} */}
    </div>
  );
}
