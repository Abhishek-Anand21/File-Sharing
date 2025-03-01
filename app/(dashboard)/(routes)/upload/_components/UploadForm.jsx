import React, { useState } from 'react'
import AlertMessage from './AlertMessage';
import FilePreview from './FilePreview';
import ProgressBar from './ProgressBar';
import UploadMessage from './UploadMessage';

function UploadForm({UploadBtnClick, progress}) {
    const [file, setFile] = useState();
    const [error, setError] = useState();
    const onFileSelect = (file) => {
        if(file && file.size > 2100000) {
            console.log("File size is greater than 2 MB");
            setError(true)
            return;
        }
        setFile(file)
        setError(false)
    }

  return (
    <div className='text-center'>
        <div class="flex items-center justify-center w-full">
            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-96 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 dark:hover:bg-bray-800 dark:bg-blue-700 hover:bg-blue-100 dark:border-blue-600 dark:hover:border-blue-500 dark:hover:bg-blue-600">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg class="w-12 h-12 mb-4 text-blue-500 dark:text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p class="mb-2 text-lg md:text-2xl text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or <strong className='text-blue-500'>drag</strong> and <strong className='text-blue-500'>drop</strong></p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX SIZE : 2MB)</p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" onChange={(event) => onFileSelect(event.target.files[0])}/>
            </label>
        </div>
        {error ? <AlertMessage /> : null}
        {file ? <FilePreview file={file} removeFile={() => setFile(null)}/> : null}
        {
            progress > 0 
            ? 
            <ProgressBar progress={progress}/> 
            : 
            <button disabled={!file} className='p-2 bg-blue-500 text-white w-[25%] mt-5 rounded-full disabled:bg-gray-500'
            onClick={()=> UploadBtnClick(file)}>
                upload
            </button>
        }
        {progress == 100 ? <UploadMessage /> : null}
    </div> 
  )
}

export default UploadForm