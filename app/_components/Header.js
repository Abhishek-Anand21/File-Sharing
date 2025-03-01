"use client"

import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React, { useState } from 'react'

function Header() {
  return (
    <header className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 border-b">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Image src='/logo.svg' width={40} height={40}/>
            </div>
            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-14 text-sm">
                  <li>
                    <a className="text-gray-700 transition hover:text-gray-700/75 bg-blue-50 rounded-md p-1" href=""> Home </a>
                  </li>
                  <li>
                    <a className="text-gray-700 transition hover:text-gray-700/75 bg-blue-50 rounded-md p-1" href="/upload"> Upload </a>
                  </li>
                  <li>
                    <a className="text-gray-700 bg-gray-100 rounded-md p-1"> About Us </a>
                  </li>
                  <li>
                    <a className="text-gray-700 bg-gray-100 rounded-md p-1"> Contact Us </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <UserButton />
              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
    </header>    
  )
}

export default Header