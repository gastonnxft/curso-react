import './App.css';
import Mensaje from './componentes/Mensaje'
function App() {
  return (
    <div className="App">
      <div className='container mt-3'>
        <div className='jumbotron'>
          <h1>mi proyecto react</h1>
          <hr/>
          <p>
            mi primer clase asdasdasdasdasdasd
          </p>
          <hr/>
          <Mensaje />
        </div>
      </div>
    </div>
  );
}

export default App;
