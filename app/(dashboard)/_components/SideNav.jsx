"use client"

import { File, ShieldCheck, Upload } from 'lucide-react'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const SideNav = () => {
  const menulist = [
    {
      id: 1,
      name: 'Upload',
      icon: Upload,
      path: '/upload'
    },
    {
      id: 2,
      name: 'File',
      icon: File,
      path: '/files'
    },
    {
      id: 3,
      name: 'Upgrade',
      icon: ShieldCheck,
      path: '/upgrade'
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const handleNavigation = (index, path) => {
    setActiveIndex(index);
    router.push(path);
  };

  return (
    <div className='shadow-sm border-r h-full'>
      <div className='p-5 border-b'>
        <Link href='/'><Image src={'/logo.svg'} width={50} height={50} /></Link>
      </div>
      <div className='flex flex-col float-left w-full'>
        {menulist.map((item, index) => (
          <button className={`flex gap-2 p-4 hover:bg-gray-100 w-full
          ${activeIndex == index ? 'bg-blue-50 text-blue-700' : 'text-gray-500'}`}
            onClick={() => handleNavigation(index, item.path)}
            >
              <item.icon/>
              <h2>{item.name}</h2>
          </button>
        ))}
      </div>
    </div>
  )
}

export default SideNav