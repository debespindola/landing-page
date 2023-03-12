import { FC } from "react";
import { tagColors } from "../../assets/theme";

import {
  TagWrapper,
  Bullet,
  Label,
} from './styles';

interface ITagProps {
  color: keyof typeof tagColors;
  label: string;
}

const Tag: FC<ITagProps> = ({
  color,
  label,
}) => {
  return (
    <TagWrapper>
      <Bullet color={color} />
      <Label>{label}</Label>
    </TagWrapper>
  )
};

export default Tag;