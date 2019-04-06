import React from 'react';

import '../assets/style/main/skills.css';
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css";

const Skills = () => (
    <section className="skills" id="skills">
        <div className="skills__content">
        <ScrollAnimation animateIn='fadeIn'>
            <h2 className="skills__subtitle">Projetos de qualidade e feito com<br></br> muito amor.</h2></ScrollAnimation>  
            <ScrollAnimation animateIn='fadeIn'>
                <p className="skills__text">
                    
                    Estamos sempre aprimorando nossos conhecimentos em diversas 
                    tecnologias dentro dos grupos de estudos e nos encontros que promovemos.  
                    Acreditamos que juntas somos mais, agregando conhecimento umas com as outras. 
                    Um time engajado, com vontade de fazer e conquistar, permitindo desenvolver projetos de qualidade para os nossos clientes.
                </p>
            </ScrollAnimation>  
        </div>
        <div className="skills__skillset">
            <h2 className="skills__title">Skills</h2>
            <ScrollAnimation animateIn='bounceInRight'><p className="skill__name">HTML</p></ScrollAnimation> 
            <div className="skill__skillbar">
            <div className="skill html">80%</div>   
        </div>

        <ScrollAnimation animateIn='bounceInRight'><p className="skill__name">CSS</p></ScrollAnimation> 
            <div className="skill__skillbar">
                <div className="skill css">40%</div>
            </div>

            <ScrollAnimation animateIn='bounceInRight'><p className="skill__name">JavaScript</p></ScrollAnimation> 
            <div className="skill__skillbar">
                <div className="skill js">50%</div>
            </div>

            <ScrollAnimation animateIn='bounceInRight'> <p className="skill__name">React</p></ScrollAnimation> 
            <div className="skill__skillbar">
                <div className="skill react">50%</div>
            </div>

            <ScrollAnimation animateIn='bounceInRight'><p className="skill__name">MySQL</p></ScrollAnimation> 
            <div className="skill__skillbar">
                <div className="skill mysql">40%</div>
            </div>
        </div>
  </section>
);

export default Skills;
