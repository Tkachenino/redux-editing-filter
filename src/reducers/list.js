import {nanoid} from 'nanoid';

import {
  ADD_LIST_ITEM,
  DELETE_LIST_ITEM,
  EDIT_LIST_ITEM
} from '../actions/actionsType';

const initialState = [
  {id: nanoid(), name: 'Замена стекла', price: 21000},
  {id: nanoid(), name: 'Замена кнопки', price: 15000},
]

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_LIST_ITEM: 
      let {name, price} = action.payload;
      return [...state, {id: nanoid(), name, price: Number(price)}];
    case DELETE_LIST_ITEM: 
      let {id} = action.payload;
      return state.filter(i => i.id !== id);
    case EDIT_LIST_ITEM: 
      let {name: nameValue, price: priceValue, id: idValue} = action.payload;
      const idx = state.findIndex(i => i.id === idValue);
      return [...state.slice(0, idx), {name: nameValue, price: priceValue, id: idValue}, ...state.slice(idx + 1)]
    default:
      return state;
  }
}

