import React, { useState } from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Person from '@mui/icons-material/Person';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import NotInterestedIcon from '@mui/icons-material/NotInterested';

export default function ListEntry({ data }) {
  const [status, setStatus] = useState(0);

  const buttons = [<RadioButtonUncheckedIcon />, <CheckCircleIcon sx={{ color: 'green' }} />, <NotInterestedIcon sx={{ color: 'red' }} />];

  const handleClick = () => {
    setStatus((status + 1) % 3);
  }

  return (
    <ListItem
      divider
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={handleClick}>
          {
            buttons[status]
          }
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <Person />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={data}
      />
    </ListItem>
  )
}
