import React from 'react'
import { words } from '../constants/index.js'
import Button from '../components/Button.jsx'
import { useGSAP} from '@gsap/react';
import gsap from 'gsap';
import AnimatedCounter from '../components/AnimatedCounter.jsx';
    
const Hero = () => {
    useGSAP(() => {
        gsap.fromTo('.hero-text h1',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' },
        )
    })
  return (
    <section id="hero" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 z-10">
            <img src="images/bg.png" alt="background" />
        </div>

        <div className="hero-layout">
            <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                <div className="flex flex-col gap-7">
                    <div className="hero-text">
                        <h1>
                            Visualizing
                            <span className="slide">
                                <span className="wrapper">
                                    {words.map((word) =>(
                                        <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                            <img
                                                src={word.imgpath}
                                                alt={word.text}
                                                className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                                            />
                                            <span>{word.text}</span>
                                        </span>
                                    ))}
                                </span>
                            </span>
                        </h1>
                        <h1>into strategic actions</h1>
                        <h1>that create impact.</h1>
                    </div>
                    <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                        Hi, I'm Athallahariq Mahdi Ramadhan, Undergraduate Student at Telkom University in Data Science.
                    </p>
                    <Button 
                        className="md:w-80 md:h-16 w-60 h-12"
                        id="Button"
                        text="See My Work"
                    />
                </div>
            </header>
            <div className="flex justify-center items-center">
                    <img 
                        src="images/foto-profil.jpg" // Ganti dengan path foto Anda
                        alt="Foto Profil Athallahariq"
                        className="w-full max-w-md h-auto object-cover rounded-2xl -translate-y-6 -translate-x-30" // Class untuk styling gambar
                    />
                </div>
        </div>
        <AnimatedCounter />
    </section>
  )
}

export default Hero