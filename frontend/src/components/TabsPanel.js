import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ApplicantList from './ApplicantList';

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='w-[800px]'>
      <Box className="mt-8">
        <Tabs tab value={value} onChange={handleChange} centered className="rounded-md">
          <Tab value={0} label="TODO" />
          <Tab value={1} label="Unread" />
        </Tabs>
      </Box>
      <Box className="pt-2">
        {value === 0 && (
          <ApplicantList entries={["John", "Arthur", "Rainman", "John", "Arthur", "Rainman"]} />
        )}
        {value === 1 && (
          <ApplicantList entries={["John", "Harvey", "Kellogg"]} />
        )}
      </Box>
    </div>
  );
}
