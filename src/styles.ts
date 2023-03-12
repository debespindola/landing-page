import styled, { createGlobalStyle }  from 'styled-components';
import { colors } from './assets/theme';

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${colors.darkGrey};

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;

    font-family: 'Montserrat Alternates', sans-serif;
  }
`

export const AppContainer = styled.main`
  width: 100%;
  max-width: 1440px;

  padding: 72px;

  display: flex;
  flex-direction: column;
  row-gap: 224px;

  @media(max-width: 700px) {
    padding: 48px;
    row-gap: 64px;
  }
`;

