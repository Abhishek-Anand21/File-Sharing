import { PartyPopper } from 'lucide-react'
import React from 'react'

function UploadMessage() {
  return (
    <div className="mt-4">
      <div role="alert" className="rounded-xl border border-gray-200 bg-white p-4">
        <div className="flex items-start gap-4">
          <span className="text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <div className="flex-1">
            <strong className="block font-medium md:text-lg text-gray-900"> File Uploaded </strong>
            <p className="mt-1 text-sm text-gray-700">Your file was uploaded successfully!</p>
          </div>
          <PartyPopper className='h-8 w-8 text-gray-500' />
        </div>
      </div>
    </div>
  )
}

export default UploadMessage