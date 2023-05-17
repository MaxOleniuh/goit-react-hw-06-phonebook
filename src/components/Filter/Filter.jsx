import { useDispatch, useSelector } from 'react-redux';
import { LabelStyled, InputStyled } from './Filter.styled';
import { changeFilter } from 'redux/slice';
const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.toolkit.filter)
  
  return (
    <LabelStyled>
      Find contacts by name
      <InputStyled
        onChange={(e) => dispatch(changeFilter(e.currentTarget.value))}
        type="text"
        value={filter}
      />
    </LabelStyled>
  );
};

export default Filter;
