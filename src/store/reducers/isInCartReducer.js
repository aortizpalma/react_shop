import * as actionTypes from '../actions';

const isInCart = (state = false, action) => {
    switch(action.type){
        case 'IN_CART':
            return !state;
        default:
            return state;
    }
};

export default isInCart;