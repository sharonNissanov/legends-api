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
      isToggleOn: false,
      clicked_button_id: null,
      clicked_button_name: null,
      clicked_button_legentId:null,


      show_legend:false,
    };
  }

  handleClickButton(id, name, legentId) {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
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
      <header className="App-header">
        
        {/* display buttons inline */}
        <div> 
          {obj.MonitorType.map((a)=>
          <Button key={a.Id} name={a.Name} 
          onClick={()=>this.handleClickButton(a.Id, a.Name, a.LegentId) } />
          
          )}
        </div>

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

        
      </header>

      
    </div>
    );
  }
}


