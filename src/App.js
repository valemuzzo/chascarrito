import 'bootstrap/dist/css/bootstrap.css';
import  {BrowserRouter, Switch, Route,} from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { FirestoreProvider } from './context/FirestoreContext';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Cart from './components/Cart';
import Orden from './components/Cart/Orden';


function App() {

  return (
    <div className="d-flex flex-column contenedor container-fluid px-0">
      <FirestoreProvider>
      <CartProvider defaultValue={[]}>
      <BrowserRouter>
        <NavBar/>
          <Switch>
            <Route exact path='/'>
              <ItemListContainer text={"Bienvenidos al bazar de chascos y bromas!"}/>
            </Route>
            <Route  exact path='/Cart' component={Cart}/>
            <Route  exact path='/Orden' component={Orden}/>
            <Route exact path='/producto/:id' component={ItemDetailContainer}/>
            <Route  exact path='/:categoria' component={ItemListContainer}/>
            <Route path="*" children={<div>Página no encontrada</div>} />
          </Switch>
          <Footer/>
      </BrowserRouter>
      </CartProvider>
      </FirestoreProvider>
    </div>
  );
}

export default App;
