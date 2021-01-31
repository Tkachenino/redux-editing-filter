import {useSelector, useDispatch} from 'react-redux';
import {changeFilter} from '../actions/actionsCreater';


const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const changeValue = (e) => {
    dispatch(changeFilter(e.target.value))
  }

  return (
    <input className="Filter" name='filter' value={filter} onChange={changeValue}/>
  )
}

export default Filter;