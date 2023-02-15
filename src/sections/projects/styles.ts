import styled from 'styled-components';
import { colors } from '../../assets/theme';

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 100%;
  height: 100%;

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
  font-family: 'Montserrat Alternates', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 100%;

  width: 100%;
  align-items: flex-start;
  
  margin: 0;
  color: ${colors.lighterPink};

  @media(min-width: 700px) {
    font-size: 1.8rem;
  }

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
`;

export const Credits = styled.span`
  font-family: 'Montserrat Alternates';

  font-style: normal;
  font-weight: 700;
  font-size: 0.5rem;
  line-height: 20px;

  color: rgba(255, 255, 255, 0.5);

  width: 100%;
  height: fit-content;
  text-align: end;

  @media(min-width: 700px) {
    font-size: 0.6rem;
  }

  @media(min-width: 1200px) {
    font-size: 0.8rem;
  }
`;
