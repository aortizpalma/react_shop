import './App.scss';
import Home from './pages/Home';
import ProductItemPage from './pages/ProductItemPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
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
