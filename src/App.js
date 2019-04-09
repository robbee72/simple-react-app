import React, { Component } from 'react';
import LandPage from './components/LandingPage';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Hello World! I am here...</p>
        </header>
        <div className="Landing">
          <LandPage />
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
