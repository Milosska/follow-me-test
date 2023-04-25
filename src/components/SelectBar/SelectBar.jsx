import PropTypes from 'prop-types';
import { StyledBar, StyledSelect } from './SelectBar.styled';

export const SelectBar = ({ setFilter }) => {
  const handleSelect = e => {
    setFilter(e.target.value);
  };

  return (
    <StyledBar
      whileHover={{ scale: 1.1, backgroundColor: '#5cd3a8' }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
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

SelectBar.propTypes = {
  setFilter: PropTypes.func.isRequired,
};
