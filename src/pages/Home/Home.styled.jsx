import { StyledBtn } from '../../components/Button/Button.styled';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  position: relative;
  text-align: center;
  padding: 30vh 30vw;
`;

export const TextThumb = styled.div`
  position: relative;
  z-index: 2;
`;

export const PageMotto = styled.p`
  margin-top: 10px;
  margin-bottom: 30px;
  font-family: 'MontserratSemiBold';
  font-size: 28px;
  line-height: 32px;
`;

export const Link = styled(StyledBtn)`
  display: inline-block;
  width: 200px;
`;

export const TweetLink = motion(Link);
