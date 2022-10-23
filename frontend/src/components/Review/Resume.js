import React from 'react'

export default function Resume({ settings, data }) {
  let dummmyData = {
    'applicant_id': 1,
    'first_name': 'ABCD',
    'last_name': 'EFGH',
    'phone_number': '123456789',
    'email': 'abcd.efgh@ncsu.edu',
    'website': 'https://abcd.com',
    'state': 'NC',
    'country': 'USA',
    'city': 'RAL',
    // 'approval_status': None,
    'experience_id': 1,
    'job_title': 'SDE Intern',
    'location': 'Ral',
    'job_description': 'test',
    // 'end_date': datetime.date(2020, 1, 1),
    'education_id': 1,
    'organization': 'NCSU',
    'gpa': '9.06',
    'university': 'NCSU',
    'skill_id': 1,
    'skill_info': 'Sample skill text',
    'project_id': 1,
    'project_text': 'Sample text'
  }

  return (
    <div>
      <div>
        <h1 className='text-xl'>Resume</h1>
        <div className='flex flex-row text-xl'>
          Name: {!settings.Name ? dummmyData.first_name + ' ' + dummmyData.last_name : ''}
        </div>
        <div>{dummmyData.applicant_id}</div>
      </div >
    </div >
  )
}
