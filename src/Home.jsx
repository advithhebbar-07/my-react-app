 
import { projectsData } from './data/projects.js';
import ProjectCard from './components/ProjectCard/ProjectCard';
import Hero from './components/Hero/Hero';
import AboutSection from './components/AboutSection/AboutSection';
import SkillCard from './components/SkillCard/SkillCard';
import Contact from './Contact.jsx';

function Home() {
  const featured = projectsData.filter((project) => project.featured);

  return (
    <div className="home-page">
      <Hero />

      <AboutSection />

      <SkillCard />

      <section className="featured-section container" id="projects">
        <h2>Featured Projects</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
          }}
        >
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <Contact />
    </div>
  );
}

export default Home;
