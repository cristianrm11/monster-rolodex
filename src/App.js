import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
      .then((resp) => resp.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((m) =>
      m.name.toLowerCase().includes(searchField)
    );

    return (
      <div className='App'>
        <input
          type='search'
          placeholder='search monsters'
          onChange={(e) => {
            this.setState({ searchField: e.target.value });
          }}
        ></input>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
