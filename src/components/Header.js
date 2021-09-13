import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <h1>React Online Shop</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Cart</a></li>
                </ul>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Products</Link></li>
                    <li><Link to="/">About Us</Link></li>
                    <li><Link to="/">Contact</Link></li>
                    <li><Link to="/">Cart</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;