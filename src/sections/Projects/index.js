import React from 'react';
import {
  Container,
  Box,
  List,
  Image,
  Description,
  Team,
  TeamTitle,
  TeamSubTitle,
} from './styles';
import SectionTitle from '../../components/SectionTitle';
import { useProjects } from '../../Hooks/useProjects';

export default function Projects() {
  const { projects } = useProjects();

  return (
    <Container id="projects">
      <SectionTitle title="Projetos" align="center" />
      <List>
        {projects &&
          projects.length > 0 &&
          projects.map((project) => (
            <Box
              href={project.link}
              target="_blank"
              rel="noopener"
              key={project.id}
            >
              <Image src={project.image} alt={project.name} />
              <Description>{project.description}</Description>
              <TeamTitle>Time:</TeamTitle>
              <Team>
                {project &&
                  project.team
                    .split(', ')
                    .map((teamMember) => (
                      <li key={teamMember}>{teamMember}</li>
                    ))}
                <TeamSubTitle>Gerente de projeto:</TeamSubTitle>
                <li>{project.project_manager}</li>
                <TeamSubTitle>Líder técnica:</TeamSubTitle>
                <li>{project.tech_leader}</li>
              </Team>
            </Box>
          ))}
      </List>
    </Container>
  );
}
