import './App.css';
import Mensaje from './componentes/Mensaje'
import Contador from './componentes/Contador'
function App() {
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
          <div className="row">
            <div className="col-4">
              <Mensaje msj="mensaje numero 1" fondo = "pink"/>
            </div>
            <div className="col-4">
              <Mensaje msj="mensaje numero 1" fondo = "orange"/>
            </div>
            <div className="col-4">
              <Mensaje msj="mensaje numero 1" fondo = "lightblue"/>
            </div>
            
          </div>
          <hr/>

          <Contador valor="123" fondo="brown" />
          <Contador valor="321" fondo="black" />
          

        </div>
      </div>
    </div>
  );
}

export default App;
