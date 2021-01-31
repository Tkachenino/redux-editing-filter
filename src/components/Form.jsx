import {useSelector, useDispatch} from 'react-redux';
import {addListItem, editListItem, editField, cancelField} from '../actions/actionsCreater';

const Form = () => {
  const {name, price, id} = useSelector(state => state.form);
  const dispatch = useDispatch();

  const saveNewListItem = (e) => {
    e.preventDefault();
    if (id) {
     dispatch(editListItem(name, price, id));
    } else {
     dispatch(addListItem(name, price));
    }
  }

  const changeField = (e) => {
    const {name, value} = e.target;
    dispatch(editField(name, value));
  }

  return (
    <form className='Form' onSubmit={saveNewListItem}>
      <input
        name='name'
        placeholder='name'
        value={name}
        onChange={changeField}
      />
      <input 
        name='price'
        placeholder='price'
        value={price}
        onChange={changeField}
      />
      <button type='submit'>save</button>
      {id && <button onClick={() => {dispatch(cancelField())}}>cancel</button>}
    </form>
  )
}

export default Form;