import PropTypes from 'prop-types';
import { MotionBtn } from './Button.styled';

export const Button = ({ text, onClick, isActive = false }) => {
  return (
    <MotionBtn
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      type="button"
      onClick={onClick}
      isActive={isActive}
    >
      {text}
    </MotionBtn>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};
