import React, { Component } from 'react'
import '../assets/style/main/Projects.css'
import ImageProBono from '../assets/images/projects.jpeg'
import ImageComercial from '../assets/images/projects2.jpg'
import ImageParticipate from '../assets/images/projects3.jpg'

class Projects extends Component{
    render(){
        return(
    <section className="projects" id="projects">
        <div>
            <div className='service-section-one'>
                <div>
                    <img src={ImageProBono} alt='projetos pro-bonos' />
                </div>

                <div>
                    <h1>Projetos Pro-Bonos</h1>
                        <p>
                        Projetos Web/Mobile para organizações sem fins lucrativos.<br></br>
                        Excelente oportunidade para os membros que<br></br> estão começando na área de tecnologia.<br></br>
                        Ajuda as organizações/iniciativas na divulgação de suas<br></br> ações/atividades/campanhas.<br></br>
                        Apoio da comunidade para desenvolver <br></br>habilidades profissionais.
                        </p>
                </div>
            </div>

            <div className='service-section-two'>
                <div>
                    <h1>Projetos Comerciais</h1>
                    <p>
                    Projetos Web/Mobile para empresas e organizações.<br></br>
                    Oportunidade para os membros participarem de projetos reais por meio da prestação de serviços.<br></br>  
                    Qualidade no serviço prestado.<br></br>
                    Apoio e incentivo ao empreendedorismo feminino.<br></br>
                    Apoio da Comunidade, de leads técnicas com mais experiência de mercado.<br></br> 
                    
                    <br></br>
                    </p>
                </div>
                <div>
                    <img src={ImageComercial} alt='projetos comerciais' />
                </div>
            </div>


            <div className='service-section-one'>
                <div>
                    <img src={ImageParticipate} alt='projetos pro-bonos' />
                </div>

                <div>
                    <h1>Como Posso Participar?</h1>
                        <p>
                        Membros do WWcode Recife participando de<br></br> grupos de estudos e meetups práticos.<br></br>
                        Líderes/Voluntários do WWCode apoiando com<br></br> mentoria e liderando times.<br></br>
                        Buscamos pessoas comprometidas, éticas, disponíveis,<br></br> que gostem de aprender, de compartilharconhecimento <br></br> e de trabalhar em equipe.
                        </p>
                </div>
            </div>

          </div> 
         </section>  
        )
    }
}

export default Projects