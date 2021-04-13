import React from 'react';


export default function Legend(props) {
    var i =0;
  return (
    <fieldset>
        {/* {console.log(props)} */}
        {/* <legend><b style={{ textTransform: "uppercase"}}>{props.title} LEGEND</b></legend> */}
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



 
