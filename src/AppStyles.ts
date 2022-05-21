import styled, { keyframes } from 'styled-components';
import illustration from './assets/images/illustration.png';
import { colors } from './assets/theme';
import { Link } from 'react-router-dom';

export const AppContainer = styled.section`
  width: 100%;
  height: 100vh;

  position: relative;

  background: linear-gradient(117.23deg, ${colors.lightPink} 39.78%, ${colors.mainPink} 88.43%);
  overflow: hidden;
`;

const showImage = keyframes`
  from {
    bottom: -100vh;
  } to {
    bottom: 0;
  }
`;

export const AvatarIllustration = styled.img.attrs({
  src: illustration,
})`
  width: 300px;
  
  position: absolute;
  bottom: 0;
  right: 0;

  animation: ${showImage} 1s;

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
  line-height: 100%;
  
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

const fadeIn = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

export const TextsWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-gap: 10px;

  padding: 35px;

  opacity: 1;

  animation: ${fadeIn} 2s;

  @media(min-width: 700px) {
    grid-gap: 15px;
    padding: 40px 60px;
  }

  @media(min-width: 1200px) {
    grid-gap: 20px;
  }
`;

export const OtherMediasWrapper = styled.div`
  padding: 0 0 0 35px;

  @media(min-width: 700px) {
    padding: 0 0 0 60px;
  }
`;

export const OtherMediasText = styled.p`
  font-family: 'Montserrat Alternates', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 0.8rem;

  color: ${colors.darkPink};

  @media(min-width: 700px) {
    font-size: 0.9rem;
  }

  @media(min-width: 1200px) {
    font-size: 1rem;
  }
`;

export const OtherMediasIconsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 20px;
  place-items: center;

  width: fit-content;

  @media(min-width: 700px) {
    grid-gap: 30px;
  }

  @media(min-width: 1200px) {
    grid-gap: 40px;
  }
`; 

export const MediaIcon = styled.img`
  width: 1.3rem;
  
  @media(min-width: 700px) {
    width: 1.5rem;
  }

  @media(min-width: 1200px) {
    width: 2rem;
  }
`;

export const SocialMediaLink = styled.a``;

export const LanguageLinksWrapper = styled.div`
  position: absolute;
  right: 30px;
  top: 30px;

  display: grid;
  grid-template-columns: repeat(2, auto);
  column-gap: 15px;
`;

export const LanguageLink = styled(Link)`
  font-family: 'Montserrat Alternates', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;

  color: ${colors.lightPink};
  transition: text-shadow 0.150s;
  
  &:hover {
    color: ${colors.lightPink};
    text-shadow: 3px 2px 5px rgba(0, 0, 0, 0.3);
  }
`;
