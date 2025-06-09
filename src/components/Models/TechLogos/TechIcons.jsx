import React from 'react'
import { techStackImgs } from '../../../constants'

const TechIcons = () => {
  return (
   <div id="skills" className="flex-center section-padding">
    <div className="w-full h-full md:px-10 px-5">
     <div className="tech-grid">
        {techStackImgs.map((icon) => (
           <div key={icon.name} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
            <div className="tech-card-animated-bg" />
            <div className="tech-card-content">
             <div className="tech-icon-wrapper">
              <img
                src={icon.imgpath}
                alt={icon.name}
              />
             </div>
             <div className="padding-x w-full">
                <p>{icon.name}</p>
             </div>
            </div>
            </div>
        ))}
     </div>
    </div>
   </div>
  )
}

export default TechIcons