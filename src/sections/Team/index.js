import React, { useState, useEffect } from 'react'
import axios from 'axios';

import SectionTitle from '../../components/SectionTitle'
import Card from '../../components/Card';
import { Container, Content } from './styles'

export default function Team() {

    const [data, setData] = useState([]);
 
    useEffect(() => {
    const fetchData = async () => {
        const result = await axios(
        'https://women-dev-projects.herokuapp.com/teams',
        );

        setData(result.data);
    };

    fetchData();
    }, []);

    console.log(data);
    return (
        <Container id="team">
            <SectionTitle title="Equipe" align="center" />

            <Content>
                {data && data.sort((a, b) => a.name.localeCompare(b.name)).map(item => (
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
    )
}
