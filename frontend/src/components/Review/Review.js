import React from 'react'
import Button from '@mui/material/Button';
import TabsPanel from './TabsPanel';

export default function Review({ settings }) {
  return (
    <body>
      <div className="w-screen h-[500px] flex justify-center ">
        <TabsPanel settings={settings} />

      </div>
    </body>
  )
}
