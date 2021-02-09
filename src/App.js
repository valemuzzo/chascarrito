import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import  {BrowserRouter, Switch, Route, Link} from 'react-router-dom';


function App() {
  return (
    <div className="container-fluid px-0">
      <BrowserRouter>
        <NavBar/>
          <Switch>
          <Route exact path='/' component={ItemListContainer}>
            <ItemListContainer text={"Bienvenidos al bazar de chascos y bromas!"}/>
          </Route>
          </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
