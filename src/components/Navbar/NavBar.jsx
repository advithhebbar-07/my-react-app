// src/components/Navbar/Navbar.jsx

 import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function Navbar({ theme, toggleTheme }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="site-header">
            <nav className="navbar">
                <div className="logo">ADVITH</div>

                <ul className={isMenuOpen ? "nav-links open" : "nav-links"}>
                    <li>
                        <NavLink
                            to="/"
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) => isActive ? 'active' : ''}
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/about"
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) => isActive ? 'active' : ''}
                        >
                            About
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/skills"
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) => isActive ? 'active' : ''}
                        >
                            Skills
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/projects"
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) => isActive ? 'active' : ''}
                        >
                            Projects
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/contact"
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) => isActive ? 'active' : ''}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>

                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>

                    {/* Theme toggle button */}
                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            border: 'none'
                        }}
                    >
                        {theme === "dark" ? "☀️" : "🌙"}
                    </button>

                    {/* Mobile menu button */}
                    <button
                        className="menu-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle navigation"
                    >
                        ☰
                    </button>

                </div>
            </nav>
        </header>
    );
}

export default Navbar;