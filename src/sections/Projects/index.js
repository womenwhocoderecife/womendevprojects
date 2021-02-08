import React from 'react'
import { Container, Box, Title, Description, Team, TeamSubTitle } from './styles'
import SectionTitle from '../../components/SectionTitle';
import { useProjects } from '../../Hooks/useProjects';

export default function Projects() {

    const { projects } = useProjects();

    return (
        <Container id="projects">
            <SectionTitle title="Projetos" align="center" />

            {projects && projects.length > 0 && projects.map(project => (
                 <Box href={project.link} target="_blank" key={project.id}>
                    <img src={project.image} alt={project.name} />
                    <Title >{project.name}</Title>
                    <Description>{project.description}</Description>
                    <Team>
                        <TeamSubTitle>Time:</TeamSubTitle>
                        {project && project.team.split(', ').map(teamMember => (
                            <li key={teamMember}>{teamMember}</li>
                        ))}
                        <TeamSubTitle>Gerente de projeto:</TeamSubTitle>
                        <li>{project.project_manager}</li>
                        <TeamSubTitle>Líder técnica:</TeamSubTitle>
                        <li>{project.tech_leader}</li>
                    </Team>
                </Box>
            ))}
           
        </Container>
    )
}
