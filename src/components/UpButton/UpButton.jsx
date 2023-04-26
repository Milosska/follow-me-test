import { Icon, UpBtn } from './UpButton.styled';

export const ButtonUp = () => {
  const handleClick = () => {
    if (window.pageYOffset > 0) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <UpBtn
      type="button"
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <Icon />
    </UpBtn>
  );
};
