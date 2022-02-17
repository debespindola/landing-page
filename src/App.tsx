import {
  AppContainer,
  AvatarIllustration,
  Name,
  Greetings,
  Description,
  TextsWrapper,
} from './AppStyles';

const App = () => {
  return (
    <AppContainer>
      <AvatarIllustration />

      <TextsWrapper>
        <Greetings>
          olá, meu nome é
        </Greetings>

        <Name>
          DEBORAH <br/>
          ESPÍNDOLA
        </Name>

        <Description>
          programo software na maior parte do tempo e 
          falo sobre lifestyle {'&&'} curiosidades do mundo da 
          computação nas horas vagas.
        </Description>
      </TextsWrapper>
    </AppContainer>
  );
}

export default App;
