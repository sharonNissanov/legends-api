import React from 'react';
import './App.css';
import Button from './components/Button'
import Menu from './components/Menu'
import Legend from './components/Legend'
import ButtonsLayout from './components/ButtonsLayout'
import obj from'./Legends.json';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked_button_id: null,
      clicked_button_name: null,
      clicked_button_legentId:null,
      show_legend:false,
    };
  }

  handleClickButton(id, name, legentId) {
    this.setState(state => ({
      clicked_button_id:id,
      clicked_button_name:name,
      clicked_button_legentId: legentId,
      show_legend:false,
    }));
  }

  handleClickMonitor() {
    this.setState(state => ({
      show_legend:true,
    }));
  }

   createButtonsLayout() {
    let layout=[];
    let len=obj.MonitorType.length, check=len;
    console.log(len)
    for(let x=0; x < len;){
      if(check >4 ){
        layout.push(this.createTop4Buttons(x,x+3));
        x+=3;
       
        console.log("here")
      }
      // if(x+3 <len){
      //   layout.push(this.createTop4Buttons(x,x+3));
      //   x+=3;
      //   console.log("here")
      // }
      // if(x+2 <len){
      //   layout.push(this.createTop4Buttons(x,x+2));
      //   console.log("here1")
      //   x+=2;
      // }
      // if(x+1 <len){
      //   console.log("here2")
      //   layout.push(this.createTop4Buttons(x,x+1));
      //   x+=1;
      // }
      // if(x+1 ==len){
      //   console.log("here3")

      //   layout.push(this.createTop4Buttons(x,x+1));
      //   x+=1;
      // }
        // if(obj.MonitorType.length <=4){
        //   layout.push(this.createTop4Buttons(x,obj.MonitorType.length-1));
        //   x+=obj.MonitorType.length-x;
        // }
      // layout.push(this.createTop4Buttons(x,3));
    }
    // if(obj.MonitorType.length<=4){
    //   layout.push(this.createTop4Buttons(0,3));
    // }
  
    return (
      layout
    );
  }


createTop4Buttons(start, end){
  let res=[];
  for(let i=start ; i<end; i++){
    res.push(
        <Button key={obj.MonitorType[i].Id} name={obj.MonitorType[i].Name} 
          onClick={()=>
            {
              this.setState(state => ({
                clicked_button_id:obj.MonitorType[i].Id,
                clicked_button_name:obj.MonitorType[i].Name,
                clicked_button_legentId: obj.MonitorType[i].LegentId,
                show_legend:false,
          }))}}
        />
    )
  }
  
  let res2 = <div style={{width:"100%", display: "flex", justifyContent: "space-around"}} >{[...res]} </div>
  return res2;
}

  render() {

    return (
    <div className="App">
    

      {/* display buttons in one line */}
      {/* <div style={{width:"100%", display: "flex", justifyContent: "space-around"}} >  */}
        {/* {this.createButtonsLayout()} */}
        {/* {this.createTop4Buttons(0,3)} */}
      {/* </div>  */}


        {/* <div style={{width:"100%", display: "flex", justifyContent: "space-around"}} > */}

          {obj.MonitorType.map((a,i)=>
         
            <Button key={a.Id} name={a.Name} 
              onClick={()=>this.handleClickButton(a.Id, a.Name, a.LegentId) } />
         
           
          )}

        {/* </div>  */}





        

         {/* display the menu */}
        {
          this.state.clicked_button_name?
            <Menu title={this.state.clicked_button_name} id={this.state.clicked_button_id} names={obj.Monitor} 
            onClick={()=>this.handleClickMonitor() }/>
          :null
        }

        {/* display the legend */}
        {
          this.state.show_legend ?
            <Legend id={this.state.clicked_button_legentId} values={obj.Legends} />
          :null
        }

        
    </div>
    );
  }
}



