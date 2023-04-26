import { MdArrowBackIos } from 'react-icons/md';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Button = styled.button`
  position: fixed;
  bottom: 10px;
  right: 30px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  padding-top: 15px;
  border-radius: 50%;
  background-color: #ebd8ff;
  border: none;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus-visible {
    background-color: #5cd3a8;
  }

  &.is-hidden {
    display: none;
  }
`;

export const UpBtn = motion(Button);

export const Icon = styled(MdArrowBackIos)`
  width: 40px;
  height: 40px;
  color: #5736a3;
  transform: rotate(90deg);
`;
