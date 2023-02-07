import styled from 'styled-components';
import { colors } from '../../assets/theme';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 12px;

  width: 100%;  
  height: 100%;

  max-width: 350px;
  max-height: 200px;

  padding: 24px;
  border-radius: 4px;

  background: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(20px);
`;

export const Title = styled.span`
  font-family: 'Montserrat Alternates';
  font-style: normal;
  font-weight: 700;
  font-size: 1.1rem;

  color: ${colors.white};
`;

export const Description = styled.span`
  font-family: 'Montserrat Alternates';
  font-style: normal;
  font-weight: 400;
  font-size: 0.8rem;

  color: ${colors.white};
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 100%;

  column-gap: 8px;
  margin-top: 12px;
`;
