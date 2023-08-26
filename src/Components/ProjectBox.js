import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    TindogDesc : "This website is a landing page of Tinder but for dogs. It is a responsive website which was made to understand Bootstrap. I also learned how to host my project on Github and then how to deploy that project using Github pages.",
    TindogGithub : "https://github.com/DevanshSahni/tindog",
    TindogWebsite : "https://devanshsahni.github.io/tindog/",

    RogFreeDesc : "A website that shows you over seven specialized yoga postures for specific diseases or health problems. This was a group project made in a team of two for a 36-hour-long online hackathon named Hackodisha 2.0.",
    RogFreeGithub : "https://github.com/DevanshSahni/Rog-Free",
    RogFreeWebsite : "https://devanshsahni.github.io/Rog-Free/",

    SecondLoopDesc:"SecondLoop is a web-based platform designed to connect users willing to donate unused medicines with NGOs in need..",
    SecondLoopGithub:"https://github.com/Timtim477/SecondLoop",
    SecondLoopWebsite:"https://newsletter-signup-teal.vercel.app/"
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox