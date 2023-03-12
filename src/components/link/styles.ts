import styled from "styled-components";

export const LinkAnchor = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 4px;

  font-family: 'Montserrat Alternates';
  
  font-weight: 700;
  font-size: 1rem;
  line-height: 22px;
  text-decoration-line: underline;

  color: #FEFEFE;

  @media(min-width: 1200px) {
    font-size: 1.1rem;
  }

  &:hover {
    text-decoration-line: underline;
    color: #FEFEFE;
  }
`;