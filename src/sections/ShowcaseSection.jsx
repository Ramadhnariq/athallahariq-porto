import { useRef } from 'react'
import { gsap  } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);



 useGSAP(() => {
 const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
 projects.forEach((card, index) => {
     gsap.fromTo(card,
         { y: 50, opacity: 0 },
         { y:0, opacity: 1, duration: 1, delay: 0.3 * (index+1), scrollTrigger: { trigger: card, start: 'top bottom-=100'}
 
         }
     )  
 })
     gsap.fromTo(sectionRef.current, { opacity: 0 }, {opacity: 1, duration: 1.5})
 }, []);


  return (
    <section id="work" ref={sectionRef} className="app-showcase">
     <div className="w-full">
       <div className="showcaselayout">
        {/* Left Section */}
         <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
             <img src="public/images/project1.png" alt="Ryde" />
            </div>
            <div className="text-content">
               <h2>Analisis Tren dan Status Pesanan</h2> 
               <p className="text-white-50 md:text-xl">
                Menampilkan ringkasan metrik utama dan rincian status pesanan. Analisis visual disajikan berdasarkan tren waktu, performa divisi, serta sebaran geografis per regional.
               </p>
            </div>
        </div>    
        {/* Right Section */}
        <div className="project-list-wrapper overflow-hidden">
         <div className="project" ref={project2Ref}>
          <div className="image-wrapper bg-[#ffefdb]">
              <img src="public/images/project2.png" alt="Library Management Platform" />
          </div>
           <h2>Rekomendasi Handphone</h2>
         </div>

        <div className="project" ref={project3Ref}>
          <div className="image-wrapper bg-[#ffe7eb]">
              <img src="public/images/project3.png" alt="YC Directory" />
          </div>
           <h2>Query Multi-indexing</h2>
         </div>
        </div>
      </div>
     </div>
    </section>
  )
}

export default ShowcaseSection