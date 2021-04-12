import React from 'react';
import './App.css';
import Button from './components/Button'
import Menu from './components/Menu'
import obj from'./Legends.json';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      clicked_button_id: null,
      clicked_button_name: null
    };

  }

  handleClick(id, name) {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
      clicked_button_id:id,
      clicked_button_name:name,
    }));
  
  console.log(id, name);
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        
        {/* display buttons inline */}
        <div> 
          {obj.MonitorType.map((a)=>
          <Button key={a.Id} name={a.Name} 
          onClick={()=>this.handleClick(a.Id, a.Name) } />
          
          )}
           {/* <Menu /> */}
        </div>
        <Menu title={this.state.clicked_button_name} id={this.state.clicked_button_id} names={obj.Monitor}/>
      </header>

      
    </div>
    );
  }
}


