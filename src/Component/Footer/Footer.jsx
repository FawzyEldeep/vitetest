import React from 'react'
import style from "./Footer.module.css"

export default function Footer() {
  return <>
  <div className='fixed bottom-0 right-0 left-0 bg-gray-200   p-3'>
   <h1 className='text-start capitalize text-gray-700 text-2xl'> get the fresh cart app</h1>
   <p className='text-gray-400 text-lg text-start mx-2'> we will send you a link , open it your phone to download the app </p>
   
<div className='flex '>
<form className="w-3/4 mx-8">
    <label for="email-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
    <input  type="email" id="email-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" Email..." required />
</form>

<button className='capitalize text-white bg-emerald-600 border p-2 rounded-lg'> share app link</button>
</div>


  </div>
  
  </>
  
}
