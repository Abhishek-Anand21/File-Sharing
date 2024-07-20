import React from 'react'

function ProgressBar({progress}) {
  return (
    <div className='bg-gray-400 w-full mt-3 h-4 rounded-full'>
        <div className='bg-blue-500 h-4 rounded-full text-[12px] text-white' style={{width:`${progress}%`}}>
          {`${Number(progress).toFixed(0)}%`}
        </div>
    </div>
  )
}

export default ProgressBar