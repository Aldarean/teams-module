import React, { Component } from 'react';
import './scss/main.scss';
import Sidebar from './components/layout/sidebar/sidebar';
import ContentContainer from './components/layout/contentContainer/contentContainer';

class App extends Component {
  render() {
    return (
      <div className="App page-container">
        <Sidebar />

        <ContentContainer>

        </ContentContainer>
      </div>
    );
  }
}

export default App;
