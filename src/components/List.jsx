import {useSelector} from 'react-redux';
import ListItem from './ListItem';

const List = () => {
  const list = useSelector(state => state.list);
  const filter = useSelector(state => state.filter);
  
  const filterList = list.filter(i => i.name.includes(filter))
  return (
    <ul className="List">
      {filterList.map(i => (
        <ListItem key={i.id} {...i}/>
      ))}
    </ul>
  )
}

export default List;