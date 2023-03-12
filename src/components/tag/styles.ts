import styled from 'styled-components';
import { colors, tagColors } from '../../assets/theme';

export const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  column-gap: 4px;

  width: fit-content;

  padding: 4px 8px;
  background-color: ${colors.darkGrey};

  border-radius: 16px;
`;

export const Bullet = styled.div<{color: keyof typeof tagColors}>`
  background: ${({ color }) => tagColors[color]};

  border-radius: 50%;
  width: 12px;
  height: 12px;
`;

export const Label = styled.span`
  font-family: 'Montserrat Alternates';
  
  font-weight: 700;
  font-size: 0.8rem;

  color: ${colors.white};

`;