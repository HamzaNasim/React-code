import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){

super()
this.state = {

  counter : 0
}


this.add = this.add.bind(this)
this.dec = this.dec.bind(this)
  }


add(){
this.setState({
counter : this.state.counter +1

})

console.log(this.state.counter)

}


dec(){
this.setState({
counter : this.state.counter -1

})

}

  render() {
    console.log(this.props.data)
    return (
      <div className="App">
     
      <h2>Counter : {this.state.counter}</h2>
       <button onClick = {this.add}> ADD</button>
       <button onClick = {this.dec}> DEC</button>

      </div>
    );
  }
}

export default App;
