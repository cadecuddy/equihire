import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ApplicantList from './ApplicantList';

export default function CenteredTabs({ reviewList, completeList, data, settings }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const names = ["John", "Arthur", "Rainman", "John", "Arthur", "Rainman"];
  // const data = [{ name: "John", status: 0 }, { name: "Arthur", status: 1 }, { name: "Rainman", status: 2 }, { name: "John", status: 0 }, { name: "Arthur", status: 1 }, { name: "Rainman", status: 2 }];
  // console.log(reviewList)

  return (
    <div className='w-[800px]'>
      <Box className="mt-8">
        <Tabs tab value={value} textColor={'secondary'} indicatorColor={'secondary'} onChange={handleChange} centered className="rounded-md">
          <Tab value={0} label="REVIEW" />
        </Tabs>
      </Box>
      <Box className="pt-2">
        {value === 0 && (
          <ApplicantList settings={settings} data={reviewList} unreadList={true} />
        )}
      </Box>
    </div>
  );
}
