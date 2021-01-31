import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <div className="container-fluid px-0">
      <NavBar/>
      <ItemListContainer text={"Bienvenidos al bazar de chascos y bromas!"}/>
    </div>
  );
}

export default App;
