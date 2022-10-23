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
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions } from '@mui/material';
import Button from '@mui/material/Button';
import Resume from './Resume';
import Divider from '@mui/material/Divider';

export default function ListEntry({ unreadList, changeStatus, settings, applicantData }) {
  const [status, setStatus] = useState(applicantData.approval_status);
  const [open, setOpen] = useState(false);

  const buttons = [<RadioButtonUncheckedIcon />, <CheckCircleIcon sx={{ color: 'green' }} />, <NotInterestedIcon sx={{ color: 'red' }} />];

  const handleClose = (action) => {
    if (action === 'accept') {
      setStatus(1);
      applicantData.approval_status = 1;
      // changeStatus(applicantData.id, 1);
    }
    else if (action === 'reject') {
      setStatus(2);
      applicantData.approval_status = 2;
      // changeStatus(applicantData.id, -1);
    }
    else {
      setStatus(0);
      applicantData.approval_status = 0;
      // changeStatus(applicantData.id, 0);
    }
    setOpen(false);
  }

  // console.log(applicantData.first_name, applicantData.approval_status);

  return (
    <ListItem
      divider
      secondaryAction={
        <div>
          <IconButton edge="start" aria-label="delete">
            {
              <RemoveRedEyeIcon onClick={() => setOpen(true)} />
            }
          </IconButton>
          <IconButton edge="end" aria-label="view" className="pointer-events-none">
            {
              buttons[status]
            }
          </IconButton>
        </div>
      }
    >
      <Dialog
        fullWidth
        maxWidth={'xl'}
        scroll={'paper'}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Applicant Information: {!settings["Name"] ? applicantData.first_name + " " + applicantData.last_name : "Applicant #" + applicantData.applicant_id}</DialogTitle>
        <Divider />
        <DialogContent>
          <Resume data={applicantData} settings={settings} />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success" centered onClick={() => handleClose('accept')}>Accept</Button>
          <Button variant="contained" color="error" onClick={() => handleClose('reject')}>Reject</Button>
          <Button variant="outlined" onClick={() => handleClose('')}>Close</Button>
        </DialogActions>
      </Dialog>
      <ListItemAvatar>
        <Avatar>
          <Person />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={!settings["Name"] ? applicantData.first_name + " " + applicantData.last_name : "Applicant #" + applicantData.applicant_id}
      />
    </ListItem>
  )
}
