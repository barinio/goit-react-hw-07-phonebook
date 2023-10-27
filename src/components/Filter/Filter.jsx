import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <Label>
      Find contacts by name
      <Input type="text" onChange={e => dispatch(setFilter(e.target.value))} />
    </Label>
  );
};
