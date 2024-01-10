import React from 'react'
import { Play } from 'lucide-react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='w-screen aspect-video pt-[12%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold w-1/2'>{title}</h1>
        <p className='py-6 text-lg w-1/3'>{overview}</p>
        <div className='flex gap-3'>
            <button className='bg-white flex items-center text-black py-4 px-12 text-xl rounded-lg font-semibold hover:bg-opacity-80'><Play strokeWidth={1} color='black' />Play</button>
            <button className='bg-gray-500 text-white py-4 px-12 text-xl bg-opacity-50 rounded-lg'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle