import styled from 'styled-components';
import { colors } from '../../assets/theme';

export const CardWrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 12px;

  width: 100%;  
  height: 100%;
  padding: 32px;

  border-radius: 4px;

  background: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(30px);

  transition: transform 0.2s;
  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 700px) {
    min-width: 100%;
    height: fit-content;
    padding: 24px;
  }
`;

export const Title = styled.span`
  font-family: 'Montserrat Alternates';
  
  font-weight: 700;
  font-size: 1.1rem;

  color: ${colors.white};

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Description = styled.span`
  font-family: 'Montserrat Alternates';
  
  font-weight: 400;
  font-size: 0.8rem;
  height: 40px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  color: ${colors.white};
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: fit-content;

  column-gap: 8px;
  margin-top: 12px;
`;
