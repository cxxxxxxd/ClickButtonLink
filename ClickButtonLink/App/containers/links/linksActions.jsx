﻿import {
    GET_LINKS_START,
    GET_LINKS_SUCCESS,
    GET_LINKS_ERROR    
} from './linksConstants.jsx'
import "isomorphic-fetch"

export function getLinks(pageIndex = 0, projectId) {
    let queryTrailer = '?pageIndex=' + pageIndex;
    if (projectId) {
        queryTrailer += '&projectId=' + projectId;
    }

    return {
        type: 'PROMISE',
        actions: [GET_LINKS_START, GET_LINKS_SUCCESS, GET_LINKS_ERROR],
        url: constants.pagelinks + queryTrailer,
        method: 'GET',
    }

    /*return (dispatch) => {
       
        fetch(window.constants.pagelinks + queryTrailer)
            .then((response) => {
                return response.json();
            }).then((data) => {
                dispatch({ type: GET_LINKS_SUCCESS, payload: data });
            }).catch((ex) => {
                dispatch({ type: GET_LINKS_ERROR, payload: ex });
            });
    }*/
}