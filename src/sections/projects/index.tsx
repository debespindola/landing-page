import axios from "axios";
import { FC, useEffect, useState } from "react";
import Card from "../../components/card";
import Link from "../../components/link";
import {
  SectionWrapper, Title, CardsWrapper, Credits, HeadingWrapper,
} from './styles';

const Projects: FC = () => {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    try {
      const { data } = await axios.get('https://api.github.com/users/debespindola/repos');

      const reposIds = [326241135, 275604070, 526286461, 325075954, 386487872, 415140910]

      const filteredData = data.filter((repo: any) => reposIds.includes(repo?.id));
      
      setProjects(filteredData);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <SectionWrapper>
      <HeadingWrapper>
        <Title>Projects</Title>
        <Link href="https://github.com/debespindola">see more on my github</Link>
      </HeadingWrapper>

      <CardsWrapper>
        {projects?.map((project: any) => {
          const language = project?.language?.toLowerCase();

          return (
            <Card 
              key={project?.id}
              title={project?.name}
              tags={project?.language ? [{
                label: project?.language,
                color: language,
              }] : []}
              description={project?.description}
            />
        )})}
      </CardsWrapper>

      <Credits>enhanced by Github REST API</Credits>
    </SectionWrapper>
  )
};

export default Projects;