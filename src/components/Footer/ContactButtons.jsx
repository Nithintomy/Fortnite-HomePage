import React from 'react'

function ContactButtons() {
  return (
    <div className='flex flex-col sm:flex-row justify-center items-center'>
    <button className='bg-black text-white py-3 px-6 mb-2 mr-4 border border-white sm:mb-0 sm:mr-2'>
        Ring us on Skype
    </button>

    <button className='bg-white text-black py-3 px-12'>
        Contact Us
    </button>
</div>
  )
}

export default ContactButtons
