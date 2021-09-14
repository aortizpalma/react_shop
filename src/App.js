import './App.scss';
import Home from './pages/Home';
import ProductItemPage from './pages/ProductItemPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { initializeProducts } from './store/reducers/productReducer.js';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {

/*   const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeProducts())
  }, [dispatch]); */


  return (
    <Router>
      <div className="App">
        <Home/>
        {/* <ProductItemPage /> */}
      </div>
    </Router>
  );
}

export default App;
