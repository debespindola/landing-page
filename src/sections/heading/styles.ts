import styled from 'styled-components';
import { colors } from '../../assets/theme';

export const HeadingContainer = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export const Name = styled.h1`
  font-family: 'Montserrat Alternates', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 3rem;
  line-height: 100%;
  
  margin: 0;
  background: ${() => `linear-gradient(90deg, ${colors.lighterPink} 3.51%, ${colors.lightPink} 83.94%)`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media(min-width: 700px) {
    font-size: 4rem;
  }

  @media(min-width: 1200px) {
    font-size: 4.5rem;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Montserrat Alternates', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  
  margin: 0;
  width: 70%;

  color: ${colors.lighterPink};

  @media(min-width: 700px) {
    font-size: 1.5rem;
    width: 70%;
  }

  @media(min-width: 1200px) {
    font-size: 2rem;
    width: 50%;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  width: 100%;
`; 

export const Description = styled.span`
  font-family: 'Montserrat Alternates', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 0.5rem;
  
  margin: 0;
  width: 50%;

  color: ${colors.white};

  @media(min-width: 700px) {
    font-size: 0.9rem;
    width: 70%;
  }

  @media(min-width: 1200px) {
    font-size: 1.1rem;
    width: 50%;
  }
`; 

