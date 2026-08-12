// src/components/GitHubStats/GitHubStats.jsx

import { useState, useEffect } from 'react';
import './GithubStats.css';

function GithubStats({ username = 'advithhebbar-07' }) {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true; // Prevents race conditions

        async function fetchStats() {
            try {
                setLoading(true);
                setError(null); // Clear previous errors

                const response = await fetch(
                    `https://api.github.com/users/${username}`
                );

                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error('User not found');
                    }

                    throw new Error('Failed to fetch user data');
                }

                const data = await response.json();

                if (isMounted) {
                    setStats(data);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err.message);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        if (username) {
            fetchStats();
        }

        return () => {
            isMounted = false; // Cleanup on unmount or username change
        };
    }, [username]);

    if (loading) {
        return <p className="loading-text">Loading GitHub stats...</p>;
    }

    if (error) {
        return <p className="error-text">Error: {error}</p>;
    }

    if (!stats) {
        return null;
    }

    return (
        <div className="github-stats">
            <img
                src={stats.avatar_url || 'https://via.placeholder.com/100'}
                alt={`${stats.name || username}'s GitHub avatar`}
                width="100"
                height="100"
                style={{
                    borderRadius: '50%',
                    objectFit: 'cover'
                }}
            />

            <div className="stats-info">
                <h3>{stats.name || username}</h3>

                <p>
                    Public Repos: <strong>{stats.public_repos}</strong>
                </p>

                <p>
                    Followers: <strong>{stats.followers}</strong>
                </p>
            </div>
        </div>
    );
}

export default GithubStats;