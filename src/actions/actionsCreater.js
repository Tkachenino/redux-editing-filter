import {
  ADD_LIST_ITEM,
  DELETE_LIST_ITEM,
  EDIT_LIST_ITEM,
  CHOSE_LIST_ITEM,
  EDIT_FIELD,
  CANCEL_FIELD,
  CHANGE_FILTER
} from './actionsType';

export function addListItem(name, price) {
  return { type: ADD_LIST_ITEM, payload: {name, price} };
}
export function deleteListItem(id) {
  return { type: DELETE_LIST_ITEM, payload: {id} };
}
export function editListItem(name, price, id) {
  return { type: EDIT_LIST_ITEM, payload: {name, price, id} };
}
export function choseListItem(name, price, id) {
  return { type: CHOSE_LIST_ITEM, payload: {name, price, id} };
}
export function editField(name, value) {
  return { type: EDIT_FIELD, payload: {name, value} };
}
export function cancelField () {
  return { type: CANCEL_FIELD };
}

export function changeFilter (filter) {
  return { type: CHANGE_FILTER, payload: {filter} };
}
