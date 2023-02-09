import {
  GlobalStyle,
  AppContainer,
} from './styles';
import Heading from './sections/heading';
import Projects from './sections/projects';


const App = () => {
  return (
    <AppContainer>
      <Heading />
      <Projects />

      <GlobalStyle />
    </AppContainer>
  );
}

export default App;
