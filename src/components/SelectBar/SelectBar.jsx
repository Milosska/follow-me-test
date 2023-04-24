import { StyledBar, StyledSelect } from './SelectBar.styled';

export const SelectBar = ({ setFilter }) => {
  const handleSelect = e => {
    setFilter(e.target.value);
  };

  return (
    <StyledBar>
      <label>
        Select tweets type
        <StyledSelect name="type" onInput={handleSelect}>
          <option value="all">All</option>
          <option value="follow">Follow</option>
          <option value="followings">Followings</option>
        </StyledSelect>
      </label>
    </StyledBar>
  );
};
