import { SET_ITEM, ADD_ITEM, DELETE_ITEM } from './Constants';

// Init state
export const initState = {
    item: '',
    listItem: []
  };

const reducer = (state, action) => {
    switch (action.type)
    {
      case SET_ITEM:
        return {
          ...state,
          item: action.payload
        }
        case ADD_ITEM:
        return {
          ...state,
          listItem: [...state.listItem, action.payload]
        }
      case DELETE_ITEM:
        return {
          ...state,
          listItem: state.listItem.filter((_, index) => index !== action.payload)
        }
      default:
        throw new Error('Action not found');
    }
}

export default reducer;