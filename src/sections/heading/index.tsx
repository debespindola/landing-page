import { FC } from "react";

import {
  TitleWrapper,
  Name,
  Subtitle,
  DescriptionWrapper,
  Description,
  HeadingContainer,
} from './styles';

const Heading: FC = () => {
  return (
  <HeadingContainer>
    <TitleWrapper>
      <Name>
        DEBORAH ESPÍNDOLA
      </Name>

      <Subtitle>
        Software Engineer
      </Subtitle>
    </TitleWrapper>

    <DescriptionWrapper>
      <Description>
        Hi! I&apos;m a developer and I find my greatest fulfillment in using technology to simplify people's lives. I&apos;m also into traveling, coffee and boybands.
      </Description>
    </DescriptionWrapper>
  </HeadingContainer>
)}

export default Heading;