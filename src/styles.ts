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
  }
`

export const AppContainer = styled.section`
  width: 100%;
  max-width: 1440px;

  padding: 72px;

  display: flex;
  flex-direction: column;
  row-gap: 144px;
`;


