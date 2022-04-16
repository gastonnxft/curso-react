import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css'
import Mensaje from './componentes/Mensaje'
import Contador from './componentes/Contador'
import { Navbar } from './componentes/Navbar'
import { RutaNoValida } from './componentes/RutaNoValida';
import { Redirect } from 'react-router-dom';

function MostrarDatosHijo(props){
  let {contador,contador2, id} = props.datos 
  if(id) {
    return  <h3 className='alert alert-success'>
        Contador del Hijo({id}):(C1) {contador} (C2) {contador2}
    </h3>
  } else { 
    return <h3 className='alert alert-danger'>
        Contador del Hijo: no hay datos
    </h3>
  }
}

// function App() {
  class App extends React.Component {

  constructor(){
    super()
    console.log('123123')
    // this.recibirDatosHijo = this.recibirDatosHijo.bind(this)
  }

  state = {
    datos: {contador: null, contador2: null, id: null}
  }

  recibirDatosHijo(datos) {
    let {contador,contador2, id} = datos 
    console.log (`App recibirDatosHijo(${id}): (C1)${contador} (C2)${contador2}`)

    this.setState({datos})
  }

  render () {

    let {contador, contador2, id} = this.state.datos

    return (
      <div className="App">
        <div className='container mt-3'>
          <div className='jumbotron'>
            <h1>mi proyecto react</h1>
            <hr/>
            <p>
              sere te amo mucho mucho mucho
            </p>
  
            <hr/>

            <h2>Router</h2>
            <br/>

            <BrowserRouter>
              <Navbar />
              <Switch>
                
                {/*-------------------------------------------*/
                /*---------------- Redireccion ---------------*/
                /*-------------------------------------------*/}
                <Route exact path="/">
                  <Redirect to="/mensaje" />
                </Route>

                {/*-------------------------------------------*/
                /*------- Ruteado sin parametros -------------*/
                /*-------------------------------------------*/
                /*-------------------------------------------*/
                <Route path='/mensaje' component= {Mensaje}/>}
                
        
                {/*-------------------------------------------*/
                /*----Ruteados con parametros por ruta ------*/
                /*-------------------------------------------*/}
                {/* Componente ruteados*/}
                <Route path='/mensaje1/:msj/:fondo' component= {Mensaje} />
                <Route path='/mensaje2/:msj/:fondo' component= {Mensaje} />
                <Route path='/mensaje3/:msj/:fondo' component= {Mensaje} />

                {/*Componente para ruta no definida */}
                <Route component= {RutaNoValida} />

              </Switch>

            </BrowserRouter>
            


            
            <hr/>
            <hr/>

            <h2>Up Lifting</h2>
            <br/>
            
            {/*-------------------------------------------*/
            /*----------- Render Condicional: && ---------*/
            /*-------------------------------------------*/}
            {/*{ id &&
              <h3 className='alert alert-success'>
                Contador del Hijo({id}):(C1) {contador} (C2) {contador2}
            </h3>
            }
            { !id &&
              <h3 className='alert alert-danger'>
                Contador del Hijo: no hay datos
            </h3>
            }*/}

            {/*-------------------------------------------*/
            /*--Render Condicional: operador ternario ? --*/
            /*-------------------------------------------*/}
            {/* id?
              <h3 className='alert alert-success'>
                Contador del Hijo({id}):(C1) {contador} (C2) {contador2}
            </h3>
              :
              <h3 className='alert alert-danger'>
                Contador del Hijo: no hay datos
            </h3>
            */}
            {/*-------------------------------------------*/
            /*Render Condicional: dentro de un componente*/
            /*-------------------------------------------*/}
            <MostrarDatosHijo datos={this.state.datos} />



            <Contador id="1" valor="123" fondo="brown" enviarContadorAlPadre = {datos=> this.recibirDatosHijo(datos)} />
            <Contador id="2" valor="321" fondo="black" enviarContadorAlPadre = {datos=> this.recibirDatosHijo(datos)}/>
            
  
          </div>
        </div>
      </div>
    );
  } 
}

export default App;
