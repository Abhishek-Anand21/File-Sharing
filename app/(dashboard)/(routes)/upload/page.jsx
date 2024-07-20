"use client"
import React, {useState, useEffect} from 'react'
import UploadForm from './_components/UploadForm'
import { app } from '@/firebaseConfig'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useUser } from '@clerk/nextjs';
import { createRandomString } from '@/app/_utils/GenerateRandomString';
import { useRouter } from 'next/navigation';

const Upload = () => {

  const {user} = useUser();
  const [uploadComplete, setUploadComplete] = useState(false);
  const router = useRouter();
  const [progress, setProgress] = useState();
  const [FileDocId, setFileDocId] = useState();
  const storage = getStorage(app)
  const db = getFirestore(app);
  const uploadFile = (file)=> {
    const metadata = {
      contentType: file.type
    };
    
    const storageRef = ref(storage, 'file-upload/' + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        setProgress(progress)
        progress == 100 && getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          saveInfo(file,downloadURL);
        });
      },
    )
  }

  const saveInfo=async(file,fileUrl)=>{
    const docId = createRandomString();
    await setDoc(doc(db, "uploadFiles", docId), {
      fileName: file?.name,
      fileSize: file?.size,
      fileType: file?.type,
      fileUrl: fileUrl,
      userEmail: user?.primaryEmailAddress.emailAddress,
      userName: user?.firstName,
      id: docId,
      password: '',
      shortUrl: process.env.NEXT_PUBLIC_BASE_URL + "file/" + docId
    });
    setFileDocId(docId)
  }
  
  useEffect(()=> {
    console.log("Trigger");
    progress==100 && setTimeout(() => {
      setUploadComplete(true);
    }, 2000);
  }, [progress==100])

  useEffect(()=> {
    uploadComplete && setTimeout(() => {
      setUploadComplete(false);
      router.push('/file-preview/' + FileDocId);
    }, 2000);
  }, [uploadComplete==true])

  return (
    <div className='p-5 px-8 md:px-28'>
      <h2 className='text-[20px] text-center m-5 md:text-[24px]'>
        Start <strong className='text-blue-600'>Uploading</strong> File and <strong className='text-blue-600'>Share</strong> it
      </h2>
      <UploadForm UploadBtnClick={(file)=> uploadFile(file)} progress={progress}/>
    </div>
  )
}

export default Upload