import * as actionTypes from '../actions/index';

const productReducer = (state = 0, action) => {
    switch(action.type){
       case actionTypes.INCREMENT_PRODUCT:
           return state + 1 
       case actionTypes.DECREMENT_PRODUCT:
           return state - 1 
    }
    return state;
}

export default productReducer;