import React, { useEffect, useState } from 'react'
import style from "./CategoryDetails.module.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'


export default function CategoryDetails() {
  const [category, setcategory] = useState(null)
  let {id}=useParams()

  function getCategory(id){
    axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`)
    .then((res)=> {
      // console.log(res.data.data);
      setcategory(res.data.data)
      
    })
    .catch((res)=> {})

  }

  useEffect(()=> {
    getCategory(id)
  },[])
  return <>
  
  <div className="row">

    <div className='w-1/4'>
     <img src={category?.image} className='w-full' alt="" />
    </div>
    <div  className='mx-4'>
    
    <h1 className='text-emerald-600 font-bold text-2xl capitalize'>{category?.name}</h1>
    </div>

  </div>
  
  </>
}
