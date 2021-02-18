import 'bootstrap/dist/css/bootstrap.css';
import  {BrowserRouter, Switch, Route,} from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Cart from './components/Cart';


function App() {
  return (
    <div className="container-fluid px-0">
      <BrowserRouter>
        <NavBar/>
          <Switch>
          <Route exact path='/'>
            <ItemListContainer text={"Bienvenidos al bazar de chascos y bromas!"}/>
          </Route>
          </Switch>
          <Route exact path='/producto/:id' component={ItemDetailContainer}/>
           
          <Route  exact path='/:categoria'>
          <ItemListContainer/>
          </Route>
          <Route  exact path='/Cart' component={Cart}/>
          <Footer className="mb-0 bd-highlight"/>
      </BrowserRouter>
    </div>
  );
}

export default App;
