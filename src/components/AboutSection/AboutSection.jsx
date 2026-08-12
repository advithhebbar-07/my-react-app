import './AboutSection.css';

function AboutSection() {
  return (
    <section id='about' className='about-section'>
      <div className='about-wrapper container'>
        <div className='about-image'>
          <img src='/profile.jpg' alt='ADVITH' />
        </div>
        <div className='about-copy'>
          <h1>About Me</h1>
          <p>Hi! I'm ADVITH, a developer based in India, building fast, accessible web experiences.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;