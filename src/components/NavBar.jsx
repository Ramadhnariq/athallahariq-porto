import React, { useState , useEffect } from 'react'
import { navLinks } from '../constants/index.js'

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(true);
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
        <div className="inner">
            <a href="#hero" className="logo">
                Athallahariq 
            </a>

            <nav className="desktop">
                <ul>
                 {navLinks.map(({ link, name }) => (
                    <li key={name} className="group">
                        <a href={link}>
                            <span>{name}</span>
                            <span className="underline"/>
                        </a>
                    </li>
                 ))}
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default NavBar