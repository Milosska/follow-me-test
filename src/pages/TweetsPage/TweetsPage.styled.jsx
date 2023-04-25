import { StyledBtn } from '../../components/Button/Button.styled';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  padding: 20px 15px;
`;

export const SelectThumb = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LoadBtn = styled(StyledBtn)`
  display: block;
  margin: 0 auto;
`;

export const LoadMoreBtn = motion(LoadBtn);

const Link = styled(StyledBtn)`
  display: flex;
  align-items: center;
  width: 180px;

  color: #373737;
  text-align: center;
`;

export const BackLink = motion(Link);
