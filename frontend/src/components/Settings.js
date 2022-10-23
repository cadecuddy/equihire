import React from 'react'
import { Switch, List, ListSubheader, ListItem, ListItemText, ListItemIcon } from '@mui/material'
import { useEffect } from 'react';
import FadeIn from 'react-fade-in'

export default function Settings({ settings, editSettings }) {
  const [state, setState] = React.useState([settings.Name, settings.Email, settings.Website, settings.University, settings.Location]);

  useEffect(() => {

    editSettings(state);
  }, [state]);

  return (
    <FadeIn transitionDuration={650}>
    <div className='flex items-center justify-center align-middle mt-12' >
      <div className="h-[120px] select-none font-extrabold text-transparent mr-12 text-4xl text-center mt-4 bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">customize candidate anonymity</div>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: "#E5E7EB" }}
        subheader={<ListSubheader sx={{ bgcolor: "#E5E7EB", color: 'black' }}>Select Fields to Anonymize</ListSubheader>}
      >
        <ListItem divider>
          <ListItemText primary="Name" />
          <Switch
            edge="end"
            color="secondary"
            checked={settings.Name}
            onClick={() => setState([!state[0], state[1], state[2], state[3], state[4]])}
          />
        </ListItem>
        <ListItem divider>
          <ListItemText primary="Email / Phone" />
          <Switch
            edge="end"
            color="secondary"
            checked={settings.Email}
            onClick={() => setState([state[0], !state[1], state[2], state[3], state[4]])}
          />
        </ListItem>
        <ListItem divider>
          <ListItemText primary="Website" />
          <Switch
            edge="end"
            color="secondary"
            checked={settings.Website}
            onClick={() => setState([state[0], state[1], !state[2], state[3], state[4]])}
          />
        </ListItem>
        <ListItem divider>
          <ListItemText primary="Univeristy" />
          <Switch
            edge="end"
            color="secondary"
            checked={settings.University}
            onClick={() => setState([state[0], state[1], state[2], !state[3], state[4]])}
          />
        </ListItem>
        <ListItem>
          <ListItemText primary="Location" />
          <Switch
            edge="end"
            color="secondary"
            checked={settings.Location}
            onClick={() => setState([state[0], state[1], state[2], state[3], !state[4]])}
          />
        </ListItem>
      </List>
    </div >
  </FadeIn>
  )
}
