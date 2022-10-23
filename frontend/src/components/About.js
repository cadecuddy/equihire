import React from 'react'
import ResumeClipart from './resume.svg'
import ReactFloaterJs from 'react-floaterjs'

export default function About() {
  return (
    <div className='text-center flex flex-col justify-center items-center'>

      <div className="h-[100px] select-none font-extrabold text-transparent lg:text-6xl md:text-5xl sm:text-4xl mt-8 bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">facilitating equitable hiring.</div>
      <div className="h-[100px] select-none font-extrabold text-transparent lg:text-3xl md:text-2xl sm:text-xl bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">anonymize the hiring process to fit the<span><br />needs of your company.</span></div>
      <div className='flex flex-row mt-12'>
        <div className='flex'>
          <ReactFloaterJs>
            <img src={ResumeClipart} className="h-40 w-40 -rotate-6 select-none pointer-events-none flex justify-center" alt="resume clipart" />
          </ReactFloaterJs>
          <div className="font-extrabold text-transparent text-xl w-52 text-left ml-2 align-bottom mt-4 bg-clip-text bg-gradient-to-r from-purple-600 to-blue-800">select the candidate information hiring can managers view
          </div>
        </div>

        <div className='flex ml-24'>
          <ReactFloaterJs>
            <img src={ResumeClipart} className="h-40 w-40 -rotate-6 select-none pointer-events-none flex justify-center" alt="resume clipart" />
          </ReactFloaterJs>
          <div className="font-extrabold text-transparent text-xl w-52 text-left ml-2 align-bottom mt-4 bg-clip-text bg-gradient-to-r from-purple-600 to-blue-800">select the candidate information hiring can managers view
          </div>
        </div>
      </div>
    </div>
  )
}
