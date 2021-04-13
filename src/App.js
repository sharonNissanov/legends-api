import React from 'react';
import './App.css';
import Button from './components/Button'
import Menu from './components/Menu'
import Legend from './components/Legend'
import obj from'./Legends.json';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: null,
      clicked_button_id: null,
      clicked_button_name: null,
      clicked_button_legentId:null,
      show_legend:false,
    };
  }

  handleClickButton(id, name, legentId) {
    this.setState(state => ({
      isToggleOn: id,
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


  render() {

    return (
    <div className="App">
    

      {/* display buttons in one line */}


      <div className="button_group">

     
          {obj.MonitorType.map((a,i)=>
            <>

            <Button key={a.Id} name={a.Name} index={i} 
              onClick={()=>this.handleClickButton(a.Id, a.Name, a.LegentId) } />
              {
                 this.state.clicked_button_name== a.Name  && this.state.clicked_button_id== a.Id ?
                <Menu title={this.state.clicked_button_name} id={this.state.clicked_button_id} names={obj.Monitor} 
                onClick={()=>this.handleClickMonitor() }/>
                :null
              } 
            </>
          )}

    </div>

        {/* display the legend */}
        {
          this.state.show_legend ?
            <Legend id={this.state.clicked_button_legentId} values={obj.Legends} title={this.state.clicked_button_name}/>
          :null
        }

        
    </div>
    );
  }
}



