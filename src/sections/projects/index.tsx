import axios from "axios";
import { FC, useEffect, useState } from "react";
import Card from "../../components/card";
import {
  SectionWrapper, Title, CardsWrapper,
} from './styles';

const Projects: FC = () => {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    try {
      const { data } = await axios.get('https://api.github.com/users/debespindola/repos');

      const filteredData = data.filter((project: any) => (
        (project.private === false && project.fork === false) && project.name !== 'debespindola'
      ));
      
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
      <Title>Projects</Title>

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
    </SectionWrapper>
  )
};

export default Projects;