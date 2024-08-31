import React, { useEffect, useState } from 'react'
import style from "./Categories.module.css"
import axios from 'axios'
import { Link } from 'react-router-dom'



export default function Categories() {
  const [categories, setcategories] = useState([])

  function getCategories(){
  axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  .then((res)=>{
    setcategories(res.data.data)
    // console.log(res.data.data);
    
  })
  .catch((res)=> {})
 
  }

  useEffect(()=>{
    getCategories()
  },[])


  return <>

  <div className="row gap-4 my-8 ">
  {categories.length>0 ? categories.map((category)=>  <div key={category._id} className='w-1/6'>

 <Link to={`/categorydetails/${category._id}`}>
 
 <div  className='category'>

<img src={category.image} className='w-full h-[200px] object-cover ' alt="" />
<h3 className='my-3 text-emerald-600'> {category.name} </h3>

</div>
 </Link>
   </div> ) : <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
 
  </div>
    
  
  </>
}
