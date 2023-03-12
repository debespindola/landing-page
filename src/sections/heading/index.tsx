import { FC } from "react";
import Link from "../../components/link";

import {
  TitleWrapper,
  Name,
  Subtitle,
  DescriptionWrapper,
  Description,
  HeadingContainer,
  LinkWrapper,
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

    <LinkWrapper>
      <Link href="https://www.linkedin.com/in/deborah-espindola/">
        check out my linkedIn
      </Link>
    </LinkWrapper>
  </HeadingContainer>
)}

export default Heading;