import { UserButton } from '@clerk/nextjs'
import { AlignLeft } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function TopHeader() {
  return (
    <div className='flex p-5 border-b items-center justify-between md:justify-end'>
        <AlignLeft className='md:hidden'/>
        <Image src={'/logo.svg'} width={50} height={50} className='md:hidden'/>
        <UserButton />
    </div>
  )
}

export default TopHeader