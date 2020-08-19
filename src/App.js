import React from 'react';
import logo from './logo.svg';
import './App.css';
import CheckboxWithLabel from './components/CheckboxWithLabel.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Componente de tipo checkbox. Pulse el recuadro para cambiar el texto de On a Off y viceversa</p>
        <CheckboxWithLabel labelOn=" On" labelOff=" Off" />   
        <p>Podemos probar con Jest el correcto funcionamiento del componente ejecutando el comando <b>`yarn test`</b></p>      
      </header> 
          
            
    </div>    
  );
}

export default App;
