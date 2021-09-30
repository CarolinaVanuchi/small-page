import React from 'react';
import {gsap, Power3} from 'gsap';
import Header from './components/Header';
import Content from './components/Content'
import Images from './components/Images'
import './style/App.css';



function App() {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut();

  return (
    <div className="App">
      <Header timeline= {tl} ease={ease}/>
      <div className="container">
        <Content timeline= {tl}/>
        <Images timeline= {tl} ease={ease}/> 
      </div>
    </div>
  );
}

export default App;
