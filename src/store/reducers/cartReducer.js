import * as actionTypes from '../actions/index';

const cartReducer = (state = 0, action) => {
    switch(action.type){
       case actionTypes.INCREMENT_CART:
           return state + 1 
       case actionTypes.DECREMENT_CART:
           return state - 1
        default:
            return state;
    }
}

export default cartReducer;