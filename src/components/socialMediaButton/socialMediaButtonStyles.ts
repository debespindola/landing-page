import styled from 'styled-components';
import { colors } from '../../assets/theme';

export const SocialMediaButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: linear-gradient(140.33deg, rgba(255, 255, 255, 0.4) 19.37%, rgba(255, 255, 255, 0.1) 90.3%);
  backdrop-filter: blur(40px);

  border-radius: 8px;

  width: 135px;
  height: 40px;   
  padding: 15px;

  box-shadow: 3px 8px 40px rgba(0, 0, 0, 0.1);

  font-family: 'Montserrat Alternates', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 0.9rem;
  
  color: ${colors.darkPink};
  border: none;
  cursor: pointer;

  &:hover, &:focus {
    color: ${colors.darkPink};
    box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.2);
  }

  @media(min-width: 700px) {
    width: 150px;
    height: 50px;

    font-size: 1rem;
  }
`;

export const ButtonIcon = styled.img`
  width: 1.1rem;

  @media(min-width: 700px) {
    width: 1.3rem;
  }
`;
