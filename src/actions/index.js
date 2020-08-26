import { ADD_ARTICLE, DATA_REQUESTED } from '../constants/action-types.js';

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload };
}

export function getData() {
    // redux-thunk request example
    // return function(dispatch) {
    //     return fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => response.json())
    //     .then(json => {
    //         dispatch({ type: DATA_LOADED, payload: json });
    //     });
    // }
    return { type: DATA_REQUESTED };
}