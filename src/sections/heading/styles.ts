import styled from 'styled-components';
import { colors } from '../../assets/theme';

export const HeadingContainer = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export const Name = styled.h1`
  font-weight: bold;
  font-size: 2.5rem;
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

export const Subtitle = styled.h2`
  font-weight: 300;
  font-size: 1.5rem;
  
  margin: 0;
  width: 100%;

  color: ${colors.lighterPink};

  @media(min-width: 1200px) {
    font-size: 2rem;
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
  font-weight: 300;
  font-size: 1rem;
  
  margin: 0;
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

export const LinkWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;
