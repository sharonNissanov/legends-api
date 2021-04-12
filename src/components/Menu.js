import React from 'react';

//display the correct menu dynamically

export default function Menu(props) {
  return (
    <table>
      <tbody>
        <tr>
          <th>{props.title}</th>
        </tr>
          {props.names.map((name)=>name.MonitorTypeId===props.id ?
            <tr key={name.Id} >
              <td>{name.Name}</td>
            </tr>
            :null
          )}

      </tbody>
    </table>


    
  );
}
