"use client"

import { app } from '@/firebaseConfig';
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore';
import { ArrowLeftSquare, Copy } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import EnablePassword from './_components/EnablePassword';
import GlobalApi from '@/app/_utils/GlobalApi';
import { useUser } from '@clerk/nextjs';

function FilePreview({params}) {
    const db = getFirestore(app);
    const [file, setFile] = useState();
    const [email, setEmail] = useState('');
    const {user} = useUser();
    useEffect(()=> {
        console.log(params?.fileId);
        params?.fileId && getFileInfo();
    },[])

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

    const onPasswordSave=async(password)=> {
      const docRef = doc(db, "uploadFiles", params?.fileId);
      await updateDoc(docRef,{
        password: password
      });
    }

    const SendEmail=()=>{
      const data={
        emailToSend: email,
        userName: user?.firstName,
        fileName: file?.fileName,
        fileSize: (file?.fileSize / 1024 / 1024 ).toFixed(2),
        fileType: file?.fileType,
        shortUrl: file?.shortUrl,
      }
      GlobalApi.SendEmail(data).then(resp=>{
        console.log(resp);
      })
    }
  return (
    <div className='py-10 px-20'>
      <Link href='/upload' className='flex gap-3 pb-2'><ArrowLeftSquare/> Go to Upload</Link>
      <div className='flex justify-center'>
        <div className="relative block overflow-hidden rounded-lg border border-gray-200 p-4 sm:p-6 lg:p-8">
          <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-blue-500 to-purple-600" />
          <div className="sm:flex sm:justify-between sm:gap-4">
            <div>
              <h3 className="font-bold text-gray-900 text-xl md:text-3xl">
                <strong className='text-blue-600'>Share</strong> files with your <strong className='text-blue-600'>friends</strong> and <strong className='text-blue-600'>family</strong>!
              </h3>
              <p className="mt-1 text-xs md:text-base font-medium text-gray-600">~ File Sharing App</p>
            </div>
            <div className="hidden sm:block sm:shrink-0">
              <img
                alt="share"
                src="/shared-file.gif"
                className="size-32 rounded-lg object-cover shadow-sm"
              />
            </div>
          </div>

          <div className="mt-6 flex-col gap-4 sm:gap-6">
            <div className="flex flex-col mb-4 md:pr-20">
              <div className="font-medium text-gray-500 text-xs md:text-base">Short url</div>
              <div className='text-gray-400 border flex gap-2 rounded-md p-1'>
                <input type="text" value={file?.shortUrl} className='w-full outline-none font-medium'/>
                <button className='hover:text-gray-500' onClick={()=> navigator.clipboard.writeText(file?.shortUrl)}>
                  <Copy/>
                </button>
              </div>
            </div>
            <EnablePassword onPasswordSave={(password)=> onPasswordSave(password)}/>
            <div className="mt-14 flex flex-col border-2 border-dashed p-4 rounded-md">
              <div className="font-medium text-gray-500 text-xs md:text-base">Send File to Email</div>
              <div className='text-gray-700 border gap-2 rounded-md p-1'>
                <input type="email" placeholder='user@example.com' className='w-full outline-none font-medium'
                onChange={(e)=> setEmail(e.target.value)}/>
              </div>
              <button className='rounded mt-2 bg-blue-500 px-3 py-1.5 text-xs md:text-sm font-medium text-white hover:bg-blue-600'
              onClick={()=>SendEmail()}
              >
                Send Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilePreview