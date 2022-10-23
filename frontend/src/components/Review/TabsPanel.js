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

  const names = ["John", "Arthur", "Rainman", "John", "Arthur", "Rainman"];
  const data = [{ name: "John", status: 0 }, { name: "Arthur", status: 1 }, { name: "Rainman", status: 2 }, { name: "John", status: 0 }, { name: "Arthur", status: 1 }, { name: "Rainman", status: 2 }];

  return (
    <div className='w-[800px]'>
      <Box className="mt-8">
        <Tabs tab value={value} onChange={handleChange} centered className="rounded-md">
          <Tab value={0} label="REVIEW" />
          <Tab value={1} label="COMPLETE" />
        </Tabs>
      </Box>
      <Box className="pt-2">
        {value === 0 && (
          <ApplicantList entries={names} unreadList={true} />
        )}
        {value === 1 && (
          <ApplicantList entries={["John", "Harvey", "Kellogg"]} unreadList={false} />
        )}
      </Box>
    </div>
  );
}
