import './Mensaje.css'

function Mensaje(props){
    let {msj, fondo} = props.match.params
    return ( 
        <div className='Mensaje'>
            <div className='jumbotron' style = {{backgroundColor: fondo}}>
                <h3>{msj}</h3>
                <hr/>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                {/*new Date().toLocaleString()*/}
                
            </div>
        </div>
        
    )
}

export default Mensaje;