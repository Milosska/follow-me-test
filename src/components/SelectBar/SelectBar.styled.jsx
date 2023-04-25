import styled from 'styled-components';
import { motion } from 'framer-motion';

const Bar = styled.form`
  width: 500px;
  height: 50px;
  margin-right: 20px;
  padding: 10px 28px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  text-align: center;

  font-family: 'MontserratSemiBold';
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;

  & select {
    appearance: none;
  }
`;

export const StyledBar = motion(Bar);

export const StyledSelect = styled.select`
  position: relative;
  width: 200px;
  height: 28px;
  margin-left: 30px;
  border: 2px solid #5736a3;
  border-radius: 10px;
  text-align: center;

  font-family: 'MontserratMedium';
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
`;
