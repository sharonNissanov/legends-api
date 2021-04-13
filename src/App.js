import React from 'react';
import './App.css';
import Button from './components/Button'
import Menu from './components/Menu'
import Legend from './components/Legend'
import obj from'./Legends.json';

// this class holds the state:
  //  clicked_button_id: the id of the button that was clicked,
  //  clicked_button_name:  the name of the button that was clicked,
  //  clicked_button_legentId:  the legentId of the button that was clicked,
  //  show_legend: will set to true when the user will click on the menu and then the wanted legend will display,

// this class is rendering the components in order to display all the data from the json file in a dynamical way 


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


  render() {

    return (
    <div className="App">
  
      <div className="button_group">
        {/* display the buttons and the menu */}
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



