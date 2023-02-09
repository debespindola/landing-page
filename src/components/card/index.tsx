import { FC } from "react";

import { tagColors } from "../../assets/theme";
import Tag from "../tag";

import {
  CardWrapper,
  Title,
  Description,
  Tags,
} from './styles';

interface CardProps {
  title: string;
  description: string;
  tags: {
    color: keyof typeof tagColors;
    label: string;
  }[];
}

const Card: FC<CardProps> = ({
  title,
  description,
  tags,
}) => {
  return (
    <CardWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      
      {tags.length > 0 && (
        <Tags>
          {tags.map((
            tag: {
              color: keyof typeof tagColors;
              label: string;
            }, 
            index: number
          ) => (
            <Tag 
              key={`${tag.label}-${index}`} 
              label={tag.label} 
              color={tag.color} 
            />
          ))}
        </Tags>
      )}
    </CardWrapper>
  );
};

export default Card;