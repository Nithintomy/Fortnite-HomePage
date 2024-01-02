import React from 'react'

function Revenue({content,description}) {
  return (
  
        <>
        <div className='text-center'>
            <p className='font-roboto text-5xl font-light leading-8 mb-2'>
               {content}
            </p>
            <div className='flex justify-center'>
                <p className='font-roboto text-lg font-light leading-6 text-center whitespace-pre-line min-h-[4.5em]'>
                  {description}
                </p>
            </div>
        </div>
    </>
 
  )
}

export default Revenue
