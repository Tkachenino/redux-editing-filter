import { createStore, combineReducers } from 'redux'
import formReducer from '../reducers/form';
import listReducer from '../reducers/list';
import filterReducer from '../reducers/filter';

const reducers = combineReducers({form: formReducer, list: listReducer, filter: filterReducer});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;