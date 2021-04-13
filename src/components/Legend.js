import React from 'react';

//this function creates the wanted legend in a dynamical way, with the data that received from the props
export default function Legend(props) {
    var i =0;
  return (
    <fieldset>
        <table style={{width:"fit-content",borderCollapse: "separate",  borderColor: "transparent"}}>
            <caption><b style={{ textTransform: "uppercase"}}>{props.title} LEGEND</b></caption>
            <caption>AQI [level]</caption>
                <tbody>

                {props.values.map((value)=>value.Id===props.id ?
            
                    value.tags.map((tag)=>
                        <tr key={i++}>
                            <th style={{borderColor: "transparent", backgroundColor:tag.Color, padding: "10px"}}></th>
                            <th style={{borderColor: "transparent", textAlign:"left"}} >{tag.Label}</th>
                        </tr>
                    
                    )
                
                    :null
                )}


            </tbody>
        </table>

    </fieldset>
  );
}



 
