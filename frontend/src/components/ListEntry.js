import React, { useState } from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Person from '@mui/icons-material/Person';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'

export default function ListEntry({ data }) {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  }

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={handleClick}>
          {!checked ?
            <RadioButtonUncheckedIcon /> :
            <RadioButtonCheckedIcon />}
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
