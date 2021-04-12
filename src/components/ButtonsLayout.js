import React from 'react';
import Button from './Button'

export default function ButtonsLayout(props) {
    console.log(props.monitorTypeObj.length)

  return (
    <div style={{width:"100%", display: "flex", justifyContent: "space-around"}} >

    {props.monitorTypeObj.map((a)=>
      <Button key={a.Id} name={a.Name} 
        onClick={props.onClick} />

    )}


  </div>
  );
}
