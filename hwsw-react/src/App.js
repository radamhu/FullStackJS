import React, { Component } from 'react';
import NAmeInput from './NAmeInput';

class App extends Component {

  constructor() {
    super()

    this.state = {
      firstName: 'Béela',
      lastName: 'Kovács',
      clickCount: 0
    }
  }

  handleNameChange(key, value) {
    // staet direkteb nem mutálhatunk csak a setState-n keresztül
    this.setState({
      [key]: value
    })
  }

  handlePlusOneClick() { 
    this.setState((prevState) => {
      return { clickCount: prevState.clickCount + 1 } 
    })
  }

  render() {
    const { firstName, lastName } = this.state

    const fullName = `${lastName} ${firstName}`;
    
    return (
      <div >
        Nev: { fullName.length > 3 && fullName }
        <NAmeInput
          firstName={firstName}
          lastName={lastName}
          onNameChange={this.handleNameChange.bind(this)} />
        
        <br>
        </br>

        <button onClick={this.handlePlusOneClick.bind(this)} >+1</button> {this.state.clickCount } 
      </div>
    );
  }
}

export default App;
