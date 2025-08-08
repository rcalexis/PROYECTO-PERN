import './App.css';
import Formulario from './components/Productos/Formulario';
import Lista from './components/Productos/Lista';
import VerProducto from './components/Productos/producto';
// import Lista from './components/Productos/Lista';

function App() {
  return (
    <>
      <Formulario />
      <Lista />
      <VerProducto />
    </>
  );
}

export default App;
