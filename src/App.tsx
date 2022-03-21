import {
  AppContainer,
  AvatarIllustration,
  Name,
  Greetings,
  Description,
  TextsWrapper,
  OtherMediasWrapper,
  OtherMediasText,
  OtherMediasIconsWrapper,
  MediaIcon,
  SocialMediaLink,
} from './AppStyles';

import SocialMediaButton from './components/socialMediaButton';

import instagram from './assets/images/instagram.svg';
import youtube from './assets/images/youtube.svg';
import linkedin from './assets/images/linkedin.svg';
import github from './assets/images/github.svg';
import email from './assets/images/email.svg';

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

      <OtherMediasWrapper>
        <OtherMediasText>
          outras redes
        </OtherMediasText>

        <OtherMediasIconsWrapper>
          <SocialMediaLink href="https://github.com/debespindola" target="_blank">
            <MediaIcon alt="github icon" src={github} />
          </SocialMediaLink>

          <SocialMediaLink href="https://www.youtube.com/channel/UC2zVN8Gq2yJqU5FJEj0R5eA" target="_blank">
            <MediaIcon alt="youtube icon" src={youtube} />
          </SocialMediaLink>

          <SocialMediaLink href="https://www.linkedin.com/in/deborah-esp%C3%ADndola/" target="_blank">
            <MediaIcon alt="linkedin icon" src={linkedin} />
          </SocialMediaLink>

          <SocialMediaLink href="mailto:deborah@debespindola.com.br" target="_blank">
            <MediaIcon alt="email icon" src={email} />
          </SocialMediaLink>
        </OtherMediasIconsWrapper>
      </OtherMediasWrapper>
    </AppContainer>
  );
}

export default App;
