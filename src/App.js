import {Provider} from 'react-redux';
import store from './store/store';
import Form from './components/Form';
import Filter from './components/Filter';
import List from './components/List';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Filter />
        <Form />
        <List />
      </div>
    </Provider>
   
  );
}

export default App;
