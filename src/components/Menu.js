import React from 'react';

//display the correct menu dynamically
//this function creates the wanted menu in a dynamical way, with the data that received from the props
export default function Menu(props) {
  return (
    <table className="menu">
      <tbody>
          {props.names.map((name)=>name.MonitorTypeId===props.id ?
            <tr key={name.Id} onClick={props.onClick} >
              <td>{name.Name}</td>
            </tr>
            :null
          )}

      </tbody>
    </table> 
  );
}
