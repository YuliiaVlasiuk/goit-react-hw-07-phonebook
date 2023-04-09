import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { checkFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const changeFieldFilter = event =>
    dispatch(checkFilter(event.currentTarget.value));

 // console.log(filter);

  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={changeFieldFilter}></input>
    </div>
  );
};
