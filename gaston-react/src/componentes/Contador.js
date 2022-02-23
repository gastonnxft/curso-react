import React from 'react'

import './Contador.css'

class Contador extends React.Component {

    render() {
         //let contador = 123
         let {valor: contador, fondo} = this.props
        return ( 
        <div className='Contador'>
            <div className='jumbotron' style={{backgroundColor:fondo}}>
                <h3>Contador</h3>
                <h4 className='alert alert-info'>Valor: {contador}</h4>
            </div>
        </div>
        )
    }
}

export default Contador