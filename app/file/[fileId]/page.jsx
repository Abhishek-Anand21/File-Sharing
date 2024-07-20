"use client"

import { app } from '@/firebaseConfig';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { Download } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function FileView({params}) {
  const db = getFirestore(app);
  const [file, setFile] = useState();
  const [password, setPassword] = useState('');
  useEffect(()=>{
    // console.log(params);
    params.fileId && getFileInfo()
  }, [])
  const getFileInfo=async()=>{
    const docRef = doc(db, "uploadFiles", params?.fileId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setFile(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }
  return (
    <div className='bg-gray-100 h-screen w-full flex justify-center items-center flex-col gap-4'>
      <Link href='/'><Image src='/logo.svg' width={50} height={50}/></Link>
      <div className='p-10 rounded-md bg-white flex flex-col items-center'>
        <div className='text-center flex-col gap-3 items-center flex'>
          <h2 className='text-[20px] text-gray-600'>
            <strong className='text-blue-600'>{file?.userName} </strong>
            shared the file with you
          </h2>
          <h2 className='text-[14px] text-gray-400'>
            Find file details below
          </h2>
          <Image src='/download-file.gif' width={150} height={150} className='w-[150px] h-[150px] p-5' />
          <h2 className='text-gray-500 text-[15px]'>
            {file?.fileName} ⚡ {file?.fileType} ⚡ {(file?.fileSize/1024/1024).toFixed(2)} MB
          </h2>
        </div>
        {
          file?.password
          ?
          <input type="password" className='p-2 border rounded-md text-[14px] mt-5 text-center outline-blue-400'
          placeholder='Enter Password to access' onChange={(e)=> setPassword(e.target.value)}/>
          : null
        }
        <button className='flex gap-2 p-2 bg-blue-500 text-white  rounded-full w-full items-center 
        hover:bg-blue-600 text-[14px] mt-5 text-center justify-center disabled:bg-gray-300'
        disabled={password != file?.password} onClick={()=> window.open(file?.fileUrl)}>
          <Download className='h-4 w-4'/> Download
        </button>
        <h2 className='text-gray-400 text-[12px]'>Terms and Conditions applied</h2>
      </div>
    </div>
  )
}

export default FileView