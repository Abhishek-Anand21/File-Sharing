import { File, X } from 'lucide-react'
import React from 'react'

function FilePreview({file, removeFile}) {
  return (
    <div className='flex items-center justify-between mt-8 gap-4 p-2 border rounded-md border-gray-200'>
        <div className='flex items-center p-2'>
            <File height={50} width={40} className='text-blue-500'/>
            <div className='text-left pl-2'>
                <h2 className='text-lg'>{file.name}</h2>
                <h2 className='text-[12px] text-gray-400'>{(file.size/1024/1024).toFixed(2)} MB</h2>
            </div>
        </div>
        <X height={50} className='text-red-500 cursor-pointer' onClick={() => removeFile()}/>
    </div>
  )
}

export default FilePreview