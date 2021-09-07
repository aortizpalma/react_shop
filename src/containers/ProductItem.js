import React from 'react';

const ProductItem = () => {
    return (
        <div className="product">
            <div className="productContainer">
                <h2>ProductItem Name</h2>
                <div>Some imgae here</div>
                <p>Price: $100</p>
                <button>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductItem;