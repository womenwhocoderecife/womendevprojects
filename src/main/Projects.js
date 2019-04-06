import React, { Component } from 'react'
import '../assets/style/main/Projects.css'
import ImageProBono from '../assets/images/projects.jpeg'
import ImageComercial from '../assets/images/projects2.jpg'
import ImageParticipate from '../assets/images/projects3.jpg'
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css";

class Projects extends Component{
    render(){
        return(
    <section className="projects" id="projects">
        <div>
            <div className='service-section-one'>
                <div>
                <ScrollAnimation animateIn='bounceInLeft'>         
                    <img src={ImageProBono} alt='projetos pro-bonos' />
                </ScrollAnimation> 
                </div>

                <div>
                <ScrollAnimation animateIn='fadeIn'>
                    <h1>Projetos Pro-Bonos</h1>
                </ScrollAnimation>     
                    <ScrollAnimation animateIn="fadeInUp">
                        <p>
                        Projetos Web/Mobile para organizações sem fins lucrativos.<br></br>
                        Excelente oportunidade para os membros que<br></br> estão começando na área de tecnologia.<br></br>
                        Ajuda as organizações/iniciativas na divulgação de suas<br></br> ações/atividades/campanhas.<br></br>
                        Apoio da comunidade para desenvolver <br></br>habilidades profissionais.
                        </p>
                    </ScrollAnimation>    
                </div>
            </div>

            <div className='service-section-two'>
                <div>
                <ScrollAnimation animateIn='fadeIn'>
                    <h1>Projetos Comerciais</h1>
                </ScrollAnimation>       
                    <ScrollAnimation animateIn="fadeInUp">
                    <p>
                    Projetos Web/Mobile para empresas e organizações.<br></br>
                    Oportunidade para os membros participarem de projetos reais por meio da prestação de serviços.<br></br>  
                    Qualidade no serviço prestado.<br></br>
                    Apoio e incentivo ao empreendedorismo feminino.<br></br>
                    Apoio da Comunidade, de leads técnicas com mais experiência de mercado.<br></br> 
                    
                    <br></br>
                    </p>
                    </ScrollAnimation>
                </div>
                <div>
                <ScrollAnimation animateIn="fadeIn">
                    <img src={ImageComercial} alt='projetos comerciais' /> 
                </ScrollAnimation>   
                </div>
                
            </div>


            <div className='service-section-one'>
                <div>
                <ScrollAnimation animateIn='bounceInLeft'animateOut='bounceOutLeft'>
                    <img src={ImageParticipate} alt='projetos pro-bonos' />
                </ScrollAnimation>   
                </div>

                <div>
                <ScrollAnimation animateIn='fadeIn'>
                    <h1>Como Posso Participar?</h1>
                </ScrollAnimation>   
                    <ScrollAnimation animateIn="fadeInUp">
                        <p>
                        Membros do WWcode Recife participando de<br></br> grupos de estudos e meetups práticos.<br></br>
                        Líderes/Voluntários do WWCode apoiando com<br></br> mentoria e liderando times.<br></br>
                        Buscamos pessoas comprometidas, éticas, disponíveis,<br></br> que gostem de aprender, de compartilharconhecimento <br></br> e de trabalhar em equipe.
                        </p>
                    </ScrollAnimation>   
                </div>
            </div>

          </div> 
         </section>  
        )
    }
}

export default Projects