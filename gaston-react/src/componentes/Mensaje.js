import './Mensaje.css'

function Mensaje(){
    let msj = 'Mensaje numero 1'
    return ( 
        <div className='Mensaje'>
            <div className='jumbotron'>
                <h3>{msj}</h3>
                <hr/>
                <p>
                    Ejemplo componente mensaje
                </p>
                {new Date().toLocaleString()}
                
            </div>
        </div>
        
    )
}

export default Mensaje;