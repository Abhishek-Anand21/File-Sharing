import React, { useState } from 'react'
import PopupMessage from './PopupMessage';

function EnablePassword({onPasswordSave}) {
    const [isPasswordEnable, setIsPasswordEnable] = useState(false);
    const [password, setPassword] = useState('');
    const [isSaved, setIsSaved] = useState(false);
  return (
    <div className="py-4">
      <label htmlFor="Option1" className="flex cursor-pointer items-start gap-4">
        <div className="flex items-center">
          &#8203;
          <input type="checkbox" onChange={(e) => setIsPasswordEnable(true)} className="size-4 rounded border-gray-300" id="Option1" />
        </div>
        <div className='font-medium text-sm md:text-base'>
            Enable Password?
        </div>
      </label>
      {
            isPasswordEnable?
            <div className='text-gray-400 flex flex-row absolute border h-10 gap-2 rounded-md p-1'>
                <input type="password" className='outline-none font-medium' onChange={(e)=>setPassword(e.target.value)}/>
                <button disabled={password.length < 4}
                type="button" 
                class="rounded disabled:bg-gray-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-600"
                onClick={()=> {onPasswordSave(password), setIsSaved(true)}}
                >
                    Save
                </button>
              </div>
            : null
      }
      {
        isSaved?
        <PopupMessage />
        : null
      }
    </div>
  )
}

export default EnablePassword