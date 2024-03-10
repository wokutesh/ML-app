import React from 'react'

export default function Header() {
    return (
        <header className='flex items-center justify-between gap-4 p-4'>
            <a href="/"><h1 className=' text-base  text-size'>ML<span
             className=' text-blue-800 bold'
            >Web</span></h1></a>
            <div className='gap-4 flex items-center '>
                <a href="/" className='flex items-center 
                gap-2 specialBtn px-3 py-2 text-wg rounded-lg 
                text-blue-400'>
                    <p className='text-color text-blue-800' >New</p>
                    <i className="fa-solid fa-plus"></i>
                </a>
            </div>
        </header>
    )
}