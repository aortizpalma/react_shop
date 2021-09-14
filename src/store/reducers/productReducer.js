import * as actionTypes from '../actions/index';
import productServices from '../../services/products';

export const initializeProducts = () => {
    return async (dispatch) => {
        const data = await productServices.getProducts();
        dispatch({
            type: actionTypes.INIT_PRODUCTS,
            data: data,
        });
    };
};

const productReducer = (state = 0, action) => {
    switch(action.type){
       case actionTypes.INCREMENT_PRODUCT:
           return state + 1 
       case actionTypes.DECREMENT_PRODUCT:
           return state - 1
       case actionTypes.INIT_PRODUCTS:
           return action.data;
    }
    return state;
};

export default productReducer;