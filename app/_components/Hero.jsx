import React from 'react'
import Constant from '../_utils/Constant'

const Hero = () => {
  return (
    <section className="bg-gray-80">
      <div className="mx-auto max-w-screen-xl px-4 py-48 lg:flex">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            <span className="text-blue-600">Upload, Save</span> and easily <span className="text-blue-600">Share</span> your your files in one place
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-gray-500">
            {Constant.desc}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="/sign-in"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded bg-gray-100 px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
              href="/"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero