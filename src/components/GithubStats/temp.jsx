 
 import './GithubStats.css';

function GithubStats() {
  const username = 'advithhebbar-07';

  return (
    <section className="github-activity container" id="github">
      <h2>GitHub Activity</h2>
      <div className="github-underline"></div>

      <a
        className="github-profile-card"
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`https://github.com/${username}.png`}
          alt={`${username} GitHub avatar`}
          className="github-avatar"
        />

        <div className="github-profile-info">
          <h3>{username}</h3>
          <p>Explore my repositories and projects.</p>
          <span>View GitHub Profile ↗</span>
        </div>
      </a>
    </section>
  );
}

export default GithubStats;
