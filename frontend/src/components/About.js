import React from 'react'
import ResumeClipart from './resume.svg'
import ScaleClipart from './scale.svg'
import ReactFloaterJs from 'react-floaterjs'
import FadeIn from 'react-fade-in'

export default function About() {
  return (
    <div className='text-center flex flex-col justify-center items-center'>
      <FadeIn transitionDuration={750}>
        <div className="h-[100px] select-none font-extrabold text-transparent lg:text-6xl md:text-5xl sm:text-4xl mt-8 bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">facilitating equitable hiring.</div>
      </FadeIn>
      <FadeIn transitionDuration={750} delay={150}>
        <div className="h-[100px] select-none font-extrabold text-transparent lg:text-3xl md:text-2xl sm:text-xl bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">anonymize the hiring process to fit the<span><br />needs of your company.</span></div>
      </FadeIn>
      <FadeIn transitionDuration={750} delay={250}>
      <div className='flex flex-row mt-12'>
        <div className='flex'>
          <ReactFloaterJs>
            <img src={ResumeClipart} className="h-40 w-40 -rotate-6 select-none pointer-events-none flex justify-center" alt="resume clipart" />
          </ReactFloaterJs>
          <div className="font-extrabold text-transparent text-xl w-52 text-left ml-2 align-bottom mt-4 bg-clip-text bg-gradient-to-r from-gray-500 to-black">select the candidate information hiring can managers view
          </div>
        </div>

        <div className='flex ml-24'>
            <img src={ScaleClipart} className="h-40 w-40 rotate-6 select-none pointer-events-none flex justify-center" alt="resume clipart" />
          <div className="font-extrabold text-transparent text-xl w-52 text-left ml-4 align-bottom mt-4 bg-clip-text bg-gradient-to-r from-black to-gray-500">eliminate potential points of bias in candidate resumes.
          </div>
        </div>
      </div>
      </FadeIn>
      <footer>
        <div className="text-center text-gray-500 text-xs absolute bottom-0 w-full left-0 right-0">
          <a href="Disclaimer">Disclaimer</a>
        </div>
      </footer>
    </div>
  )
}
