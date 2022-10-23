import React from 'react'
import { Switch, List, ListSubheader, ListItem, ListItemText, ListItemIcon } from '@mui/material'
import { useEffect } from 'react';

export default function Settings({ settings, editSettings }) {
  const [state, setState] = React.useState([settings["Name"], settings["ContactInfo"], settings["Education"], settings["Location"]]);

  useEffect(() => {

    editSettings(state);
  }, [state]);

  return (
    <div className='flex items-center justify-center align-middle mt-12' >
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: "#E5E7EB" }}
        subheader={<ListSubheader sx={{ bgcolor: "#E5E7EB", color: 'black' }}>Section Anonymization</ListSubheader>}
      >
        <ListItem divider>
          <ListItemText primary="Name" />
          <Switch
            edge="end"
            color="secondary"
            checked={settings.Name}
            onClick={() => setState([!state[0], state[1], state[2], state[3]])}
          />
        </ListItem>
        <ListItem divider>
          <ListItemText primary="Contact Info" />
          <Switch
            edge="end"
            color="secondary"
            checked={settings.ContactInfo}
            onClick={() => setState([state[0], !state[1], state[2], state[3]])}
          />
        </ListItem>
        <ListItem divider>
          <ListItemText primary="Education" />
          <Switch
            edge="end"
            color="secondary"
            checked={settings.Education}
            onClick={() => setState([state[0], state[1], !state[2], state[3]])}
          />
        </ListItem>
        <ListItem>
          <ListItemText primary="Location" />
          <Switch
            edge="end"
            color="secondary"
            checked={settings.Location}
            onClick={() => setState([state[0], state[1], state[2], !state[3]])}
          />
        </ListItem>
      </List>
    </div >
  )
}
