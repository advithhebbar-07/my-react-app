
import SkillCard from './components/SkillCard/SkillCard';

function Skills() {
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 75 },
    { name: 'React', level: 70 },
    { name: 'Python', level: 75 },
    { name: 'C Programming', level: 70 },
  ];

  return (
    <section className="skills-page container" style={{ padding: '60px 20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '15px' }}>
        My Skills
      </h1>

      <p style={{ textAlign: 'center', marginBottom: '40px' }}>
        Technologies and tools I'm learning and working with.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '28px',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            level={skill.level}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;
