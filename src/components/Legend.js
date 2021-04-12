import React from 'react';


export default function Legend(props) {
  return (
    <fieldset>
        <legend>Legend:</legend>
        <table style={{width:"300px",borderCollapse: "separate",  borderSpacing: "20px 15px", borderColor: "transparent"}}>
            <caption>Static title</caption>
                <tbody>
                    <tr>
                        <th style={{borderColor: "transparent", backgroundColor:"black", padding: "8px"}}></th>
                        <th style={{borderColor: "transparent", textAlign:"left"}} >data</th>
                    </tr>

                    <tr>
                        <th style={{borderColor: "transparent", backgroundColor:"yellow", padding: "8px"}}></th>
                        <th style={{borderColor: "transparent", textAlign:"left"}} >data1</th>
                    </tr>

                    <tr>
                        <th style={{borderColor: "transparent", backgroundColor:"green", padding: "8px"}}></th>
                        <th style={{borderColor: "transparent", textAlign:"left"}} >data2</th>
                    </tr>

                    <tr>
                        <th style={{borderColor: "transparent", backgroundColor:"red", padding: "8px"}}></th>
                        <th style={{borderColor: "transparent", textAlign:"left"}} >data3</th>
                    </tr>

                </tbody>
        </table>

    </fieldset>
  );
}



 
