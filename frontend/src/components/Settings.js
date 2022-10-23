import React from 'react'
import { Switch, List, ListSubheader, ListItem, ListItemText, ListItemIcon } from '@mui/material'

export default function Settings() {
  return (
    <div className='flex items-center justify-center align-middle mt-12'>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: "#E5E7EB" }}
        subheader={<ListSubheader sx={{ bgcolor: "#E5E7EB", color: 'black' }}>Enable Anonymization</ListSubheader>}
      >
        <ListItem divider>
          <ListItemText primary="Name" />
          <Switch
            edge="end"
          />
        </ListItem>
        <ListItem divider>
          <ListItemText primary="Contact Info" />
          <Switch
            edge="end"
          />
        </ListItem>
        <ListItem divider>
          <ListItemText primary="Education" />
          <Switch
            edge="end"
          />
        </ListItem>
        <ListItem>
          <ListItemText primary="Location" />
          <Switch
            edge="end"
          />
        </ListItem>
      </List>
    </div>
  )
}
