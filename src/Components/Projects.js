import React from 'react';
import ProjectBox from './ProjectBox';
import SecondLoopImage from '../images/SecondLoop.png';
import RogfreeImage from '../images/RogfreeImage.png';
import TindogImage from '../images/TindogImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={SecondLoopImage} projectName="SecondLoop" />
        <ProjectBox projectPhoto={RogfreeImage} projectName="RogFree" />
        <ProjectBox projectPhoto={TindogImage} projectName="Tindog" />
      </div>

    </div>
  )
}

export default Projects