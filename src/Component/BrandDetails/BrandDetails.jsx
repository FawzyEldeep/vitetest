import React, { useEffect, useState } from 'react'
import style from "./BrandDetails.module.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'


export default function BrandDetails() {
  const [brands, setbrands] = useState(null)
  let {id}=useParams()

  function getbrand(id){
    axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
    .then((res)=> {
      // console.log(res.data.data);
      setbrands(res.data.data)
      
    })
    .catch((res)=> {})

  }

  useEffect(()=> {
    getbrand(id)
  },[])
  return <>
  
  <div className="row">

    <div className='w-1/4'>
     <img src={brands?.image} className='w-full' alt="" />
    </div>
    <div  className='mx-4'>
    
    <h1 className='text-emerald-600 font-bold text-2xl capitalize'>{brands?.name}</h1>
    </div>

  </div>
  
  </>
}

