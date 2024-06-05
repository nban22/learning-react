import { SET_ITEM, ADD_ITEM, DELETE_ITEM } from './Constants';

export const setItem = payload => {
    return {
        type: SET_ITEM,
        payload
    }
}

export const addItem = payload => {
    return {
        type: ADD_ITEM,
        payload
    }
}
export const deleteItem = payload => {
    return {
        type: DELETE_ITEM,
        payload
    }
}