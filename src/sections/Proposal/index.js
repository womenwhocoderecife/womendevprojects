import React from 'react'

import ImageProBono from '../../assets/images/team01.jpg'
import ImageComercial from '../../assets/images/team02.jpg'
import ImageParticipate from '../../assets/images/team03.jpg'
import SectionTitle from '../../components/SectionTitle'

import { Container, Box, Image, Content, Text } from './styles'

const proposal = () => (
    <Container id="proposal">
    
        <Box>
            <Image src={ImageProBono} alt='projetos pro-bonos' />

            <Content>
                <SectionTitle title="Projetos Pro-Bonos" />
                <Text>
                Projetos Web/Mobile para organizações sem fins lucrativos.<br></br>
                Excelente oportunidade para os membros que<br></br> estão começando na área de tecnologia.<br></br>
                Ajuda as organizações/iniciativas na Contentulgação de suas<br></br> ações/atividades/campanhas.<br></br>
                Apoio da comunidade para desenvolver <br></br>habilidades profissionais.
                </Text>
            </Content>
        </Box>

        <Box>
            <Content>
                <SectionTitle title="Projetos Comerciais" />
                <Text>
                Projetos Web/Mobile para empresas e organizações.<br></br>
                Oportunidade para os membros participarem de projetos reais por meio da prestação de serviços.<br></br>  
                Qualidade no serviço prestado.<br></br>
                Apoio e incentivo ao empreendedorismo feminino.<br></br>
                Apoio da Comunidade, de leads técnicas com mais experiência de mercado.
                </Text>
            </Content>
            
            <Image src={ImageComercial} alt='projetos comerciais' /> 
        </Box>

        <Box>
            <Image src={ImageParticipate} alt='projetos pro-bonos' />

            <Content>
                <SectionTitle title="Como Posso Participar?" />
                <Text>
                Membros do WWcode Recife participando de<br></br> grupos de estudos e meetups práticos.<br></br>
                Líderes/Voluntários do WWCode apoiando com<br></br> mentoria e liderando times.<br></br>
                Buscamos pessoas comprometidas, éticas, disponíveis,<br></br> que gostem de aprender, de compartilharconhecimento <br></br> e de trabalhar em equipe.
                </Text>
            </Content>
        </Box>

         </Container>  
    );

    export default proposal;
