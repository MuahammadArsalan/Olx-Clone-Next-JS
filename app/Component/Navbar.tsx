

import React from 'react'
import logo from "@/app/CustomAssets/Images/olxl ogo.png"
import car from "@/app/CustomAssets/Images/nav car.jpeg"
import plot from "@/app/CustomAssets/Images/property sticker.png"
import Image from 'next/image'
import Login from './Login'
import Sell from './Sell'


const Navbar = () => {
  return (
<>

<section className='flex gap-7 flex-wrap justify-around p-5'>


<div>
  <Image src={logo} width={70} height={70} alt='logo'></Image>
</div>


{/* Car div started */}

<div className='flex gap-1'>

<div>
<Image src={car} alt='logo' width={60} height={40}></Image>
</div>

<div>
<p className="text-slate-700  font-sans font-bold">MOTORS</p>
</div>
</div>

{/* Car div ended */}
{/* Property div started */}


<div className='flex gap-1'>

<div>
<Image src={plot} alt='logo' width={55} height={10}></Image>
</div>

<div>
<p className="text-slate-700 text mt-3 ml-1 font-sans font-bold">PROPERTY</p>
</div>
</div>
{/* Property div ended */}

<div>

<Login/>
<Sell/>
</div>



</section>

</>

)
}

export default Navbar