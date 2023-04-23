import { StyledBtn } from './Button.styled';

export const Button = ({ text, onClick, isActive = false }) => {
  return (
    <StyledBtn type="button" onClick={onClick} isActive={isActive}>
      {text}
    </StyledBtn>
  );
};
