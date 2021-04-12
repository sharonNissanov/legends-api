import React from 'react';

//display the correct menu dynamically

export default function Menu(props) {
  return (
    <table className="menu">
      <tbody>
        <tr>
          <th>{props.title}</th>
        </tr>
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
