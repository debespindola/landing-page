import styled from 'styled-components';
import { colors } from '../../assets/theme';

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 100%;

  row-gap: 24px;
  position: relative;
`;

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 8px;

  width: 100%;
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 100%;

  width: 100%;
  align-items: flex-start;
  
  margin: 0;
  color: ${colors.lighterPink};

  @media(min-width: 1200px) {
    font-size: 2rem;
  }
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 48px;

  width: 100%;
  height: fit-content;

  @media(max-width: 700px) {
    grid-template-columns: 1fr;
    grid-gap: 12px;
  }
`;

export const Credits = styled.span`
  font-family: 'Montserrat Alternates';
  
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 20px;

  color: rgba(255, 255, 255, 0.5);

  width: 100%;
  height: fit-content;
  text-align: end;
`;
