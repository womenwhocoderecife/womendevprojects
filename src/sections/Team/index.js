import React from 'react';

import SectionTitle from '../../components/SectionTitle';
import Card from '../../components/Card';
import { Container, Content } from './styles';
import { useTeam } from '../../Hooks/useTeam';

export default function Team() {
  const { team } = useTeam();

  return (
    <Container id="team">
      <SectionTitle title="Equipe" align="center" />

      <Content>
        {team &&
          team
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item) => (
              <Card
                key={item.id}
                name={item.name}
                description={item.description}
                photo={item.photo}
                linkedin={item.linkedin}
                instagram={item.instagram}
                twitter={item.twitter}
                github={item.github}
              />
            ))}
      </Content>
    </Container>
  );
}
