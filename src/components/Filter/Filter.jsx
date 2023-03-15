import { TitleInput, Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { contactsFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleInputValue = e => {
    const query = e.target.value;
    console.log(query);
    dispatch(contactsFilter(query));
  };

  return (
    <TitleInput>
      Search by name
      <Input type="text" name="name" onChange={handleInputValue}></Input>
    </TitleInput>
  );
};
