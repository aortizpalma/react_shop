import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { INCREMENT_PRODUCT, DECREMENT_PRODUCT } from '../store/actions';
import * as actionTypes from '../store/actions';

const ProductItem = () => {
    const product = useSelector(state => state.productReducer);
    const cart = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();

    const addProduct = () => ({
        type: actionTypes.INCREMENT_PRODUCT,
    })


    return (
        <div className="product">
            <div className="productContainer">
                <h2>ProductItem Name</h2>
                <div className="productThumbnail">Some imgae here</div>
                <p>Price: $100</p>
                <button onClick={ () => dispatch(addProduct())}>Add to Cart</button>
                <p>Quantity: {product}</p>
            </div>
        </div>
    );
};

export default ProductItem;