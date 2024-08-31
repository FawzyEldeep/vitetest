import React, { useEffect, useState } from 'react'
import style from "./Brands.module.css"
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function Brands() {

  const [brands, setbrands] = useState([])

  function getBrands(){
    axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
    .then((res)=> {
      // console.log(res.data.data);
      setbrands(res.data.data)
      
    })

    .catch((res)=> {

    })
  }

  useEffect(()=>{
    getBrands()
  },[])

  return <>

  <div className="row">

    {brands.length>0 ? brands.map((brand)=> <div className='w-1/6' key={brand._id}>

    <Link to={`/branddetails/${brand._id}`}>

    <div className='brand py-4'>

<img src={brand.image} className='w-full' alt="" />

<h2 className='text-emerald-600 font-bold text-lg'> {brand.name} </h2>

</div>
    
    </Link>

   

    </div> ): <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}


  </div>
  
  
  
  </>
   
  
}
