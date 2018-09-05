import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    ingredients: null,
    // {
    //     salad: 0,
    //     bacon: 0,
    //     cheese: 0,
    //     meat: 0
    // },
    totalPrice: 4,
    error: false,
    building: false
}

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const addIngredient = (state, action) => {
    const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building:true
    }
    return updateObject(state, updatedState);
}

const removeIngredient = (state, action) => {
    const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 };
    const updatedIngs = updateObject(state.ingredients, updatedIng);
    const updatedSt = {
        ingredients: updatedIngs,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building:true
    }
    return updateObject(state, updatedSt);
}

const setIngredient = (state, action) => {
    return updateObject(state, {
        ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.salad,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat,
        },
        totalPrice: initialState.totalPrice,
        error: false,
        building: false
    });
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
        // const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
        // const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
        // const updatedState = {
        //     ingredients: updatedIngredients,
        //     totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
        // }
        // return updateObject(state, updatedState);
        // return {
        //     ...state,
        //     ingredients: {
        //         ...state.ingredients,
        //         [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        //     },
        //     totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
        // };
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
        // const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 };
        // const updatedIngs = updateObject(state.ingredients, updatedIng);
        // const updatedSt = {
        //     ingredients: updatedIngs,
        //     totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
        // }
        // return updateObject(state, updatedSt);
        // return {
        //     ...state,
        //     ingredients: {
        //         ...state.ingredients,
        //         [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        //     },
        //     totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
        // };
        case actionTypes.SET_INGREDIENT: return setIngredient(state, action);
        // return updateObject(state, {
        //     ingredients: {
        //         salad: action.ingredients.salad,
        //         bacon: action.ingredients.salad,
        //         cheese: action.ingredients.cheese,
        //         meat: action.ingredients.meat,
        //     },
        //     totalPrice: initialState.totalPrice,
        //     error: false
        // });
        // return {
        //     ...state,
        //     ingredients: {
        //         salad: action.ingredients.salad,
        //         bacon: action.ingredients.salad,
        //         cheese: action.ingredients.cheese,
        //         meat: action.ingredients.meat,
        //     },
        //     totalPrice: initialState.totalPrice,
        //     error: false
        // }
        case actionTypes.FETCH_INGREDIENT_FAILED: return updateObject(state, { error: true });
        // return {
        //     ...state,
        //     error: true
        // }
        default:
            return state;
    }
}

export default reducer;

