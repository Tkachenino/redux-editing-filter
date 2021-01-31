import {
  ADD_LIST_ITEM,
  EDIT_FIELD,
  EDIT_LIST_ITEM,
  CHOSE_LIST_ITEM,
  DELETE_LIST_ITEM
} from '../actions/actionsType';

const initialState = {
  name: '',
  price: '',
  id: ''
}

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_LIST_ITEM: 
      return initialState;
    case EDIT_FIELD:
      const {name, value} = action.payload;
      return {...state, [name]: value};
    case EDIT_LIST_ITEM:
      return initialState;
    case DELETE_LIST_ITEM:
      const deleteId = action.payload.id;
      if (deleteId === state.id) {
        return initialState;
      }
      return state;
    case CHOSE_LIST_ITEM:
      const {name: nameValue, price: priceValue, id} = action.payload;
      return { name: nameValue, price: priceValue, id };
    default:
      return state;
  }
}

