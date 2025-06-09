import React from 'react'
import TitleHeader from '../components/TitleHeader.jsx'
import { techStackImgs } from '../constants/index.js'

const TechStack = () => {
  return (
    <div id="skills" className="flex-center section-padding">
        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader
                title="My Data Toolkit"
                sub="The Skills I bring to the Table"
            />
            <div className="tech-grid">
                {techStackImgs.map((icon) => (
                    <div key={icon.name} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
                        <div className="tech-card-content">
                         <div className="tech-icon-wrapper">
                            <img src={icon.imgpath}/>
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

export default TechStack