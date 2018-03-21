import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function categoryReducer(state = initialState.categories, action){
    switch(action.type){
        case types.LOAD_CATEGORIES_SUCCESS:
            return action.categories;

        case types.CREATE_CATEGORY_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.category)
            ];

        case types.UPDATE_CATEGORY_SUCCESS:
            return [
                ...state.filter(category => category.Id !== action.category.Id),
                Object.assign({}, action.category)
            ];

        default:
            return state;
    }
}