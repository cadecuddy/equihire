import React from 'react'
import Button from '@mui/material/Button';
import TabsPanel from './TabsPanel';
import FadeIn from 'react-fade-in'

export default function Review({ changeStatus, reviewList, completeList, data, settings }) {

  return (
    <body>
      <FadeIn transitionDuration={650}>
        <div className="h-[100px] select-none font-extrabold text-transparent text-4xl text-center mt-4 bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">review candidates without bias</div>
      <div className="w-screen h-[500px] flex justify-center ">
          <TabsPanel reviewList={reviewList} changeStatus={changeStatus} completeList={completeList} settings={settings} />
      </div>
      </FadeIn>
    </body>
  )
}
