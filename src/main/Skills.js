import React from 'react';

import '../assets/style/main/skills.css';

const Skills = () => (
    <section className="skills" id="skills">
        <div className="skills__content">
            <h2 className="skills__subtitle">Projetos de qualidade e feito com muito amor.</h2>
            <p className="skills__text">
                Uma iniciativa do Women Who Code Recife que tem o objetivo de
                desenvolver projetos pro-bonos e comerciais para colocar em
                prática os conhecimentos adquiridos nos meetups e grupos de
                estudos do WWCode. Oportunidade para aquisição de experiência
                profissional com atuação em projetos reais. Acreditamos que
                com a criação de um portfólio próprio os profissionais ganham
                mais visibilidade ,e aumentam sua competitividade no mercado.
            </p>
        </div>
        <div className="skills__skillset">
            <h2 className="skills__title">Skills</h2>
            <p className="skill__name">HTML</p>
            <div className="skill__skillbar">
                <div className="skill html">80%</div>
            </div>

            <p className="skill__name">CSS</p>
            <div className="skill__skillbar">
                <div className="skill css">40%</div>
            </div>

            <p className="skill__name">JavaScript</p>
            <div className="skill__skillbar">
                <div className="skill js">50%</div>
            </div>

            <p className="skill__name">React</p>
            <div className="skill__skillbar">
                <div className="skill react">50%</div>
            </div>

            <p className="skill__name">MySQL</p>
            <div className="skill__skillbar">
                <div className="skill mysql">40%</div>
            </div>
        </div>
  </section>
);

export default Skills;
