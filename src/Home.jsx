 // src/pages/Home.jsx
 import { projectsData } from "./data/projects";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import Hero from "./components/Hero/Hero";
 import AboutSection from "./components/AboutSection/AboutSection";
import SkillCard from "./components/SkillCard/SkillCard";
import Contact from './Contact'; 

function Home() {
  const featured = projectsData.filter(p => p.featured);

  return (
    <div className='home-page'>
      <Hero />
      <AboutSection />
      <SkillCard />

      <section className='featured-section container' id='projects'>
        <h2>Featured Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {featured.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </section>

      <Contact />
    </div>
  );
}

export default Home;