import React from 'react'
import Login from './Login'
import Sell from './Sell'

const Header = () => {
  return (
   <>
<section className='flex flex-wrap justify-around'>

{/* Location div started */}

   <div className=''>

   <select className=" select select-bordered w-[25vw] max-w-xs">
  <option disabled selected><span><i className="ic-loca fa-solid fa-location-dot"></i></span> Location</option>
  <option>Pakistan</option>
  <option>Karachi,Pakistan</option>
  <option>Balochistan,Pakistan</option>
  <option>Sindh,Pakistan</option>
  <option>Khyber,Pakistan</option>
  <option>Gilgit,Pakistan</option>
  <option>Kashmir</option>
  <option>Saddar,Pakistan</option>
</select>
</div>
{/* Location div ended */}


{/* Search div started */}


<div>
<label className="input w-[60vw] input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Find Cars , MobilePhones and many more ...." />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
</div>
{/* Search div ended */}


{/* login div started */}



{/* login div ended */}

</section>
   </>
  )
}

export default Header