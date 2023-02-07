import styled, { keyframes } from 'styled-components';
import { colors } from './assets/theme';

export const AppContainer = styled.section`
  width: 100%;
  min-height: 100vh;

  background: ${colors.darkGrey};
  padding: 72px;
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

export const Description = styled.p`
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

const fadeIn = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

export const TextsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  opacity: 1;
  animation: ${fadeIn} 2s;
`;

