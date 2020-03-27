import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component() {
  state = { 
    contacts: []
  }

  componentDidMount() {
    fetch( 'http://')
    .then(res => res.json())
    .then((data) => {
      this.setState( { contacts: data })
    })
    .catch(console.log)
  }

  return (













  );
}

export default App;
