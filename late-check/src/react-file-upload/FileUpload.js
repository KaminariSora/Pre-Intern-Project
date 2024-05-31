import React, { useState } from 'react';
import axios from 'axios';
import ShowFileUpload from '../ShowFileUpLoad/ShowFileUpload';
import './FileUpload.css'

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('/uploadCSV', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('File uploaded successfully');
      window.location.reload();
    } catch (error) {
      console.error('Error uploading file', error);
      alert('Error uploading file');
    }
  };

  return (
    <div className='body-container'>
      <div className='container'>
        <input className='input-file' type="file" onChange={handleFileChange} />
        <button className='upload-btn' onClick={handleFileUpload}>Upload</button>
        <ShowFileUpload/>
      </div>
    </div>
  );
};

export default FileUpload;
