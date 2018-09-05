import * as actionTypes from './actionTypes';
// import axios from '../../axios-orders';

export const addIngredietn = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};

export const removeIngredietn = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
};
// 290. Sync Action creator with action type like above in 2 less before
export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENT,
        ingredients: ingredients
    };
}

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENT_FAILED
    };
}

export const initIngredients = () => {
    return {
        type: actionTypes.INIT_INGREDIENT
    };
    // return dispatch => {
    //     axios.get( '/ingredients.json' ) //Error opet njegov 
    //         .then( response => {
    //             dispatch(setIngredients(response.data));
    //         } )
    //         .catch( error => {
    //             dispatch(fetchIngredientsFailed());
    //         } );
    // };
};


