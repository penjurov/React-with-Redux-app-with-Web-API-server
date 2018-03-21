import * as types from './actionTypes';
import authorsApi from '../api/mockAuthorApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadAuthorsSuccess(authors){
    return {
        type: types.LOAD_AUTHORS_SUCCESS, authors
    };
}

export function createAuthorSuccess(author){
    return {
        type: types.CREATE_AUTHOR_SUCCESS, author
    };
}

export function updateAuthorSuccess(author){
    return {
        type: types.UPDATE_AUTHOR_SUCCESS, author
    };
}


export function loadAuthors(){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return authorsApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            throw(error);
        });
    };
}

export function saveAuthor(author){
    return function(dispatch, getState){
        dispatch(beginAjaxCall());
        return authorsApi.saveAuthor(author).then(savedAuthor => {
            author.id ? dispatch(updateAuthorSuccess(savedAuthor)) :dispatch(createAuthorSuccess(savedAuthor));
            return savedAuthor;
        }).catch(error => {
            dispatch(ajaxCallError());
            throw(error);
        });
    };
}

export function deleteAuthor(authorId){
    return function(dispatch, getState){
        dispatch(beginAjaxCall());
        authorsApi.deleteAuthor(authorId).catch(error => {
            dispatch(ajaxCallError());
            throw(error);
        });

        return authorsApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            throw(error);
        });
    };
}