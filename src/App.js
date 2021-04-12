import React from 'react';
import './App.css';
import Button from './components/Button'
import obj from'./Legends.json';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    alert(this.state.isToggleOn)
  }

  render() {
    var buttons_names = JSON.stringify(obj.MonitorType);
   
    return (
    <div className="App">
      <header className="App-header">
     { obj.MonitorType.map((a)=>
     //console.log(a.Name))
     <Button name={a.Name}  onClick={this.handleClick} />
     )}
      </header>
    </div>
    );
  }
}


