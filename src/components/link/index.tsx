import { FC } from "react";
import { LinkAnchor } from "./styles";
import { ReactComponent as Icon } from "../../assets/images/link.svg";

interface LinkProps {
  children: React.ReactNode;
  href: string;
}

const Link: FC<LinkProps> = ({ children, href }) => {
  return (
    <LinkAnchor href={href} target="_blank">
      {children}

      <Icon />
    </LinkAnchor>
  )
};

export default Link;
