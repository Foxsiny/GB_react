import React from 'react'
//import logo from './logo.svg';

import { Button } from './components/Button/Button';
import { Input } from './components/Input/Input';

import style from './App.module.css';

const name = 'Nata'

function App() {
  return (
    <>
      <h2 className={style.header} >Hello Geekbrains</h2>
      <Input name={name} />
      <Button name={name} />
    </>
  )

  //(
    //<div className="App">
      //<header className="App-header">
        //<img src={logo} className="App-logo" alt="logo" />
        //<p>
          //Edit <code>src/App.js</code> and save to reload.
        //</p>
        //<a
          //className="App-link"
          //href="https://reactjs.org"
          //target="_blank"
          //rel="noopener noreferrer"
        //>
          //Learn React
        //</a>
      //</header>
    //</div>
  //);
}

export default App;
