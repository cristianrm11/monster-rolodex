import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
      .then((resp) => resp.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className='App'>
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    );
  }
}

export default App;
