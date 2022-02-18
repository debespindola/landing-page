import {
  AppContainer,
  AvatarIllustration,
  Name,
  Greetings,
  Description,
  TextsWrapper,
} from './AppStyles';

import SocialMediaButton from './components/socialMediaButton';

import instagram from './assets/images/instagram.svg';

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

        <SocialMediaButton 
          label='instagram'
          link='https://www.instagram.com/debespindola/'
          iconUrl={instagram}
        />
      </TextsWrapper>
    </AppContainer>
  );
}

export default App;
