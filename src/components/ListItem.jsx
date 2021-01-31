import {useDispatch} from 'react-redux';
import {choseListItem, deleteListItem} from '../actions/actionsCreater';
import PropTypes from 'prop-types';

const ListItem = ({id, name, price}) => {
  const dispatch = useDispatch();
  
  const deleteItem = () => {
    dispatch(deleteListItem(id));
  }

  const editItem = () => {
    dispatch(choseListItem(name, price, id));
  }

  return (
    <li className='ListItem'>
      <p>{name}</p>
      <p>{price}</p>
      <button onClick={editItem}>Edit</button>
      <button onClick={deleteItem}>Delete</button>
    </li>
    )
}

ListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number
}

export default ListItem;