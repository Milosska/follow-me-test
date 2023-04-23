import { StyledBtn } from '../../components/Button/Button.styled';
import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  padding: 30vh 30vw;
`;

export const PageMotto = styled.p`
  margin-top: 10px;
  margin-bottom: 30px;
  font-family: 'MontserratSemiBold';
  font-size: 28px;
  line-height: 32px;
`;

export const TweetLink = styled(StyledBtn)`
  display: inline-block;
  width: 200px;
`;
