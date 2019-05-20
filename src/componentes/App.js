import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import FormularioGasto from './formulario';
import Listado from './listado';
import { validarPresupuesto } from '../helper';
import ControlPresupuesto from './controlPresupuesto';

class App extends Component {

  state = {
    persupuesto: '',
    restante: '',
    gastos: {}
  }

  componentDidMount() {
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto = () => {
    let presupuesto = prompt('Cual es el presupuesto?')

    let resultado = validarPresupuesto(presupuesto)

    if (resultado) {
      this.setState({
        presupuesto: presupuesto,
        restante: presupuesto
      })
    } else {
      this.obtenerPresupuesto();

    }
  }

  //agregar nuevo gasto al state

  agregarGasto = gasto => {

    //tomar copia state actual

    const gastos = { ...this.state.gastos }


    //agregar gasto al objeto state
    gastos[`gastos${Date.now()}`] = gasto;

    //restar al presupuesto
    this.restarPresupuesto(gasto.cantidadGasto);


    //ponerlo en mi state
    this.setState({
      gastos
    })
  }

  //Restar del presupuesto un gaso nuevo

  restarPresupuesto = cantidad => {
    //leer el gasto
    let restar = Number(cantidad);

    //tomar una copia del state actual
    let restante = this.state.restante;

    //restamos
    restante -= restar;

    restante = String(restante);

    //agregamos el nuevo state
    this.setState({
      restante
    })

  }



  render() {
    return (
      <div className="App container">
        <Header
          titulo='Gasto Semanal'
        />

        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <FormularioGasto
                agregarGasto={this.agregarGasto}
             
              />
            
            </div>

            <div className="one-half column">
              <Listado
                gastos={this.state.gastos}
              />

              <ControlPresupuesto
                presupuesto={this.state.presupuesto}
                restante={this.state.restante}

              />
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default App;
