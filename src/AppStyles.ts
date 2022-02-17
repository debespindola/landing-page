import styled from 'styled-components';
import illustration from './assets/images/illustration.png';
import { colors } from './assets/theme';

export const AppContainer = styled.section`
  width: 100%;
  height: 100vh;

  position: relative;

  background: linear-gradient(117.23deg, #FF96A1 39.78%, #AB2938 88.43%);
`;

export const AvatarIllustration = styled.img.attrs({
  src: illustration,
})`
  width: 300px;
  
  position: absolute;
  bottom: 0;
  right: 0;

  @media(min-width: 700px) {
    width: 400px;
  }

  @media(min-width: 1200px) {
    width: 600px;
  }
`;

export const Greetings = styled.span`
  font-family: 'Montserrat Alternates', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 1.2rem;
  
  color: ${colors.mainPink};

  @media(min-width: 700px) {
    font-size: 1.5rem;
  }

  @media(min-width: 1200px) {
    font-size: 2rem;
  }
`;

export const Name = styled.h1`
  font-family: 'Montserrat Alternates', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 3rem;
  line-height: 4rem;
  
  margin: 0;
  color: ${colors.darkPink};

  @media(min-width: 700px) {
    font-size: 4rem;
  }

  @media(min-width: 1200px) {
    font-size: 5rem;
  }
`;

export const Description = styled.p`
  font-family: 'Montserrat Alternates', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  
  margin: 0;
  width: 70%;

  color: ${colors.mainPink};

  @media(min-width: 700px) {
    font-size: 1.2rem;
    width: 70%;
  }

  @media(min-width: 1200px) {
    font-size: 1.5rem;
    width: 50%;
  }
`;

export const TextsWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-gap: 10px;

  padding: 60px;

  @media(min-width: 700px) {
    grid-gap: 15px;
  }

  @media(min-width: 1200px) {
    grid-gap: 20px;
  }
`;