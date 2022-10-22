import React from 'react'
import ListEntry from './ListEntry'
import { List } from '@mui/material'

export default function ApplicantList({ entries }) {
  return (
    <div className='border flex items-center align-middle bg-gray-200'>
      <List className='w-full' dense>
        {entries
          .map(entries =>
            <ListEntry data={entries} />
          )}
      </List>
    </div>
  )
}
