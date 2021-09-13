import React from 'react';
import { Switch, Route } from 'react-router';
import ProductList from '../containers/ProductList';
import About from './About';
import Contact from './Contact';
import Cart from '../containers/Cart';

const Main = () => {
    return (
        <div>
            <h1>Main</h1>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/products" exact component={ProductList} />
                <Route path="/about" exact component={About} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/cart" exact component={Cart} />
            </Switch>            
        </div>
    );
};

export default Main;