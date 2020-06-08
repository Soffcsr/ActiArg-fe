import React, { Component } from 'react';
import './App.css';
import './component/Carousel/Carousel'
import './component/Card/CardContent'
import Carousel from './component/Carousel/Carousel';
import CardContent from './component/Card/CardContent';

function App() {
  return (
    <div className="App">
      <Carousel />
      <CardContent />
    </div>
  );
}

export default App;
