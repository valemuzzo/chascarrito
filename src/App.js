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
import Error404 from './components/Error404'


function App() {
  
  return (
    <div className="d-flex flex-column contenedor container-fluid px-0">
      <FirestoreProvider>
      <CartProvider defaultValue={[]}>
      <BrowserRouter>
        <NavBar/>
          <Switch>
            <Route exact path='/'>
              <ItemListContainer text={"Sorprende a tus amigos con las mejores bromas de nuestro bazar!"}/>
            </Route>
            <Route  exact path='/Cart' component={Cart}/>
            <Route  exact path='/orden/:orderId' component={Orden}/>
            <Route exact path='/producto/:id' component={ItemDetailContainer}/>
            <Route  exact path='/:categoria' component={ItemListContainer}/>
            <Route path="*" children={<Error404/>} />
          </Switch>
          <Footer/>
      </BrowserRouter>
      </CartProvider>
      </FirestoreProvider>
    </div>
  );
}

export default App;
