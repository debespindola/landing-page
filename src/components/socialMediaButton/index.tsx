import { useState } from 'react';

import {
  SocialMediaButton,
  ButtonIcon,
} from './socialMediaButtonStyles';

interface SocialMediaProps {
  label: string;
  link: string;
  iconUrl: string;
}

const SocialMedia = ({ 
  label,
  link,
  iconUrl,
}: SocialMediaProps) => {
  return (
    <SocialMediaButton 
      href={link} 
      target="_blank"
    >
    <ButtonIcon src={iconUrl} />
      {label}
    </SocialMediaButton>
  )
}

export default SocialMedia;
