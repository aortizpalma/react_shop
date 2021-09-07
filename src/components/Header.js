import React from 'react';

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
            </nav>
        </div>
    );
};

export default Header;