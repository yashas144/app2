/* import logo from './logo.svg' */
/* import './App.css'; */
import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

/* Parent Component of my app */

function App() {
  
  return (
    <div className="App">
       
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
