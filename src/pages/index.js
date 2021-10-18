import React from 'react';

import Layout from 'components/Layout';
import AboutSection from '../components/AboutSection'
import ProjectsSection from '../components/ProjectsSection'
import SkillsSection from '../components/SkillsSection'
import WorkSection from '../components/WorkSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

import img_profile from 'assets/images/creepy_profile_pic.png';

const IndexPage = () => {
  return (
    <Layout pageName="home">
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
