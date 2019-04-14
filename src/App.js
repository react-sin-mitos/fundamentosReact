import React, { Component } from 'react';
// import ReactDOM from 'react-dom'; 

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) 
    { 
        super(props); 
        this.state = { 
          time : new Date().toLocaleTimeString()
        }; 
    } 
  
    componentWillMount() 
    { 
      // Se invoca justo antes de que el componente se monte en el DOM
      // Antes del Render()
        console.log("-1.- componentWillMount()"); 
    } 
  
    changeState() 
    { 
        this.setState({ hello : "Cambie mi estado!" }); 
    } 
    tick() 
    { 
        this.setState({ 
            time : new Date().toLocaleTimeString()
        }); 
    } 

  render() {
    console.log("0.- Render()"); 
    return (
      <div className="App">
        <header className="App-header">
          <h2>{this.state.time}</h2>
          <img src={logo} className="App-logo" alt="logo" />
          <a onClick={this.tick.bind(this)}>[Actualizar Hora]</a> 
        </header>
      </div>
    );
  }
  
  componentDidMount() 
  { 
    // Se invoca justo después de que el componente se monta en el DOM
    // Despúes del Render()
      console.log("1.- componentDidMount()"); 
      console.log("---------------------------------"); 
      this.timer = setInterval( 
        () => this.tick(), 
        1000); 
     
  } 
  componentDidUpdate() 
  { 

    // Se invoca después de que el componente se vuelve a entregar, es decir, 
    // esta función se invoca una vez después de que la función render () 
    // se ejecuta después de la actualización de State o Props.
    
      console.log("2.- componentDidUpdate()"); 
  } 

  shouldComponentUpdate(nextProps, nextState) 
    { 
      // Se invoca antes de representar un componente ya montado cuando se reciben nuevos props o estados. 
      // Si se devuelve falso, los siguientes pasos de renderización no se llevarán a cabo

        console.log("3.- shouldComponentUpdate()"); 

        return true; 
    } 
  
    componentWillUpdate() 
    { 
      // se invoca antes de que el componente se vuelva a entregar, es decir, 
      // esta función se invoca una vez antes de que la función render () 
      // se ejecute después de la actualización de State o Props.

        console.log("4.- componentWillUpdate()"); 
        console.log("---------------------------------"); 
    } 
  
 
    componentWillUnmount() 
    { 
        clearInterval(this.timer); 
    }


    componentWillRecieveProps(newProps) 
    {
      // Función exclusiva de Props y es independiente de los estados
      // Se invoca antes que el componente montado vuelva a asignar sus propiedades
    if (this.props !== newProps) { 
        console.log(" New Props have been assigned "); 
        // Use this.setState() to rerender the page. 
    } 
} 

}

export default App;
