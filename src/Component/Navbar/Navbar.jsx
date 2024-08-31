import React, { useContext } from 'react'
import style from "./Navbar.module.css"
import logo from "../../assets/freshcart-logo.svg"
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import { CartContext } from '../../Context/CartContext'


export default function Navbar() {
  let{userLogin ,setuserLogin }=useContext(UserContext)
  let {numberItems}=useContext(CartContext)
  let naviagte = useNavigate()


  function signOut(){
    localStorage.removeItem("userToken");
    setuserLogin(null);
    naviagte("/login")
  }

  return <>
  

<nav className="z-30 border-gray-200 bg-slate-200 fixed top-0 right-0 left-0 ">
    <div className="flex flex-wrap justify-center md:justify-between items-center mx-auto max-w-screen-xl p-4">
     <div className='flex items-center gap-5'>
     <Link to="" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} width="110px" className="h-8" alt="Flowbite Logo" />
        </Link>

       {userLogin != null ? <>
        <ul className='flex gap-5'>
              <li><Link to ="">Home  </Link></li>
              <li><Link className='relative' to="cart">Cart
              <div className='absolute top-[-10px] right-[-10px] size-5 bg-emerald-600 text-white rounded-full flex items-center justify-center'>  {numberItems} </div>
             </Link></li>
              <li><Link to="products">Products</Link></li>
              <li><Link to="categories">Categories</Link></li>
              <li><Link to="brands">Brands</Link></li>
            </ul>
       </>:null}
     </div>

        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <div className='icons flex gap-4'>
          <i className="fab fa-facebook"></i>
          <i className='fab fa-linkedin'></i>
          <i className='fab fa-youtube'></i>
          <i className='fab fa-tiktok'></i>
          <i className='fab fa-twitter'></i>
          </div>
           <div className='gap-5 flex links'>

            {userLogin != null ? 
            <span onClick={signOut}  className="text-sm cursor-pointer">SignOut</span>
          :<>
             <Link to="login" className="text-sm">Login</Link>
             <Link to="register"  className="text-sm">Register</Link>
          </>}
        
           </div>
        </div>
    </div>
</nav>


  </>
   
  
}
