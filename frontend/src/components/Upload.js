import React from 'react'
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from "axios";

export default function Upload() {
  const [file, setFile] = useState(null);

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const uploadImage = () => {
    let form = new FormData();

    if (file === undefined) {
      return;
    }

    form.append("file", file);

    axios.post("http://127.0.0.1:5000/upload_resume", form);
  };

  return (
    // upload file
    <div className='flex flex-col items-center justify-center'>
      <div className='text-2xl font-bold text-gray-700'>Applicants, upload your resume.</div>
      <div className='text-gray-500'>We support .pdf, .doc, and .docx files</div>
      <input name="Upload Saved Reply" type="file" onChange={onFileChange} className='flex mt-6 items-center justify-center content-center' accept=".pdf,.doc,.docx"/>
      <div className='mt-4'>

				<Button color='secondary' variant='outlined' onClick={uploadImage}>Submit</Button>

			</div>
    </div>
  )
}
