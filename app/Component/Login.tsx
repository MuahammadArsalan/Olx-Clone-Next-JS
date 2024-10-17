"use client"

import Link from 'next/link'
import React, { useState } from 'react'

const Login = () => {


  return (
<>
{/* The button to open modal */}
<label htmlFor="my_modal_6" className="btn text-white bg-slate-800">Login</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
  
  <h1 className='text-center font-extrabold text-4xl p-5'>Register</h1>
    
    <label className="input input-bordered flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70">
        <path
          d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
      </svg>
      <input type="text" className="grow" placeholder="Username" />
    </label>
    <br />
    
    
    <label className="input input-bordered flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70">
        <path
          d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
        <path
          d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
      </svg>
      <input type="text" className="grow" placeholder="Email" />
    </label>
    <br />

    <label className="input input-bordered flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70">
        <path
          fillRule="evenodd"
          d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
          clipRule="evenodd" />
      </svg>
      <input type="password" className="grow" value="" placeholder='Password' />
    </label>
    <br />

    <div className='m-auto text-center p-5'>
    <button className="btn btn-active btn-primary">Register</button>
    </div>

<Link 
href={'#'} 
onClick={() => {
  const registerModal = document.getElementById('register_modal') as HTMLInputElement | null;
  const loginModal = document.getElementById('my_modal_6') as HTMLInputElement | null;

  if (registerModal && loginModal) {
    registerModal.checked = true;
    loginModal.checked = false;
  }
}}>
<p className='text-center text-blue-400 cursor-pointer'>New At Olx? Create an account</p>
</Link>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>


  </div>
</div>


<Register/>

</>
)
}













const Register = () => {
  return (
    <>
      <input type="checkbox" id="register_modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">


          <h1 className='text-center font-extrabold text-4xl p-5'>Login</h1>
    
  
    
    
    <label className="input input-bordered flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70">
        <path
          d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
        <path
          d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
      </svg>
      <input type="text" className="grow" placeholder="Email" />
    </label>
    <br />

    <label className="input input-bordered flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70">
        <path
          fillRule="evenodd"
          d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
          clipRule="evenodd" />
      </svg>
      <input type="password" className="grow" value="" placeholder='Password' />
    </label>
    <br />

    <div className='m-auto text-center p-5'>
    <button className="btn btn-active btn-primary">Login</button>
    </div>

<Link 
href={'#'} 
onClick={() => {
  const registerModal = document.getElementById('register_modal') as HTMLInputElement | null;
  const loginModal = document.getElementById('my_modal_6') as HTMLInputElement | null;

  if (registerModal && loginModal) {
    registerModal.checked = false;
    loginModal.checked = true;
  }
}}>
<p className='cursor-pointer text-blue-400 text-center text-xl'>Already Register? Login.. </p>
</Link>
  


          <div className="modal-action">
            <label htmlFor="register_modal" className="btn">Close</label>
          </div>
        </div>
      </div>
    </>
  );
}



export default Login