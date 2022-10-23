import { Divider } from '@mui/material'
import React from 'react'

export default function Resume({ settings, data }) {

  console.log(data);
  const educationHistory = () => {
    let output = [];

    for (let i = 1; i < data.education_count; i++) {
      output.push({"University": data[`university_${i}`], "Degree": data[`education_${i}`], "GPA": data[`gpa_${i}`]});
    }
    return output;
  }

  const workHistory = () => {
    let output = [];

    for (let i = 1; i < data.work_count; i++) {
      output.push({"Title": data[`job_${i}`], "Description": data[`description_${i}`], "Location": data[`location_${i}`], "EndDate": data[`end_date_${i}`]});
    }
    return output;
  }

  return (
    <div>
      <div className="">
        {
          (!settings.Name | !settings.Email | !settings.Website | !settings.Location) ? 
          <>
          <h1 className="text-2xl text-left underline font-bold">General Information</h1>
          {!settings.Name ?
           <div className='flex flex-row text-xl'> Name: {data.first_name + " " + data.last_name}</div> : null}
          {
          !settings.Email ? 
          <div className='flex flex-row text-xl'>
            {data.email ? "Email: "  +  data.email : 'N/A'}
          </div>
          : null
          }
          {
          <div className='flex flex-row text-xl'>
            {data.phone_number ? "Phone: " + data.phone_number : ''}
          </div>
          }
          {
          !settings.Website ?
          <div className='flex flex-row text-xl'>
            {data.website ? "Website: " + data.website : ''}
          </div> : null
          }
          {
          !settings.Location ?
          <div className='flex flex-row text-xl'>
            {data.state ? "Location: " + data.state + ", " + data.country : data.country}
          </div> : null
        }
        <br></br>
          </>
          :
          <></>
        }
      </div >

      <div>
        {
          (true) ? 
          <>
            <h1 className="text-2xl text-left underline font-bold">Education</h1>
            {data.educations.length > 0 ?
            <div>
              {data.educations.map(edu => (
                (settings.University) ?
                  <div className='flex text-lg'>
                    {edu.education} - {edu.gpa}
                  </div>
                :
                <div className='flex text-lg'>
                  {edu.university} - {edu.education} |  {edu.gpa}
                </div>
              ))}
              </div> : 
              null}
          <br></br>
          </>
          :
          <></>
        }
      </div >
      
      <div>
        <h1 className="text-2xl text-left underline font-bold">Work Experience</h1>
        <div className='text-xl'>
        {data.experiences.length > 0 ? 
          <div className='text-xl'>
            {data.experiences.map(work => (
              <div className='flex-row'>
                <h1 className='w-full'><span className='italic'>{work.job_title}</span> | {work.company}</h1>
                <p className='text-sm'>{work.job_description}</p>
              </div>
            ))}
            </div> : null}
            <br></br>
        </div>
      </div>

      <div>
        <h1 className="text-2xl text-left underline font-bold">Skills</h1>
        <div className='text-xl'>
          {data.skills.length > 0 ? data.skills.map((skill) => (
            <div className='flex-row text-base'>
              <h1 className='w-full'>- {skill.skill_info}</h1>
            </div>
          )) : null}
          <br></br>
        </div>
      </div>

      <div>
        <h1 className="text-2xl text-left underline font-bold">{data.project_text ? "Projects" : null}</h1>
        {data.project_text ? (<div className='text-xl'>
          <div className='text-base'>
            {data.project_text}
          </div>
        </div>) : null}

      </div>

    </div >
  )
}
