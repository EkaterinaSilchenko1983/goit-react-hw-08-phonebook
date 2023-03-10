import { useDispatch, useSelector } from 'react-redux';
import { InputFilter, LabelFilter, WrapperFilter } from './Filter.styled';
import { setFilterContact, selectFilters } from 'redux/contacts/filtersSlice';

export const Filter = () => {
  const filter = useSelector(selectFilters);
  const dispatch = useDispatch();

  const changeFilter = event => {
    const value = event.target.value.toLowerCase().trim();
    dispatch(setFilterContact(value));
  };
  return (
    <WrapperFilter>
      <LabelFilter>
        Find contacts by name
        <InputFilter type="text" value={filter} onChange={changeFilter} />
      </LabelFilter>
    </WrapperFilter>
  );
};
