import React from 'react';
import { Helmet } from "react-helmet"

import Layout from 'components/Layout';
import AboutSection from '../components/AboutSection'
import ProjectsSection from '../components/ProjectsSection'
import SkillsSection from '../components/SkillsSection'
import ContactSection from '../components/ContactSection'

const IndexPage = () => {
  return (
    <Layout pageName="home">
      <Helmet>
        <meta name="icon" href="/src/assets/images/nelly_moon.png" />
      </Helmet>
      <div className="red-circle"></div>
      <div className="yellow-circle"></div>
      <div className="green-circle"></div>
      <div className="body">
      <section id="about">
        <AboutSection/>
      </section>
      <section id="projects">
        <ProjectsSection/>
      </section>
      <section id="skills">
        <SkillsSection/>
        </section>
      {/* <section id="work">
        <WorkSection/>
      </section>  */}
      <section id="contact">
        <ContactSection/>
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;
