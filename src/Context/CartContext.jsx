import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Checkout from "../Component/Checkout/Checkout";

export let CartContext= createContext()

export default function CartContextProvider(props){

    let headers = {
        token:localStorage.getItem("userToken")}

        const [cartId, setcartId] = useState(0);
        const [numberItems, setnumberItems] = useState(0)




    function addProductToCard(productId){

     return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{productId :productId},{headers})
        .then((res) => {
            setnumberItems(res.data.numOfCartItems)
            setcartId(res.data.data._id)
            return res
        })
        .catch((err)=>err)

}

function updateCartProductQuantity(productId , newCount){
  return  axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{count : newCount} , {headers})
    .then((res)=> res)
    .catch((err)=> err)
}
function getLoggedUserCart(){
  return  axios.get(`https://ecommerce.routemisr.com/api/v1/cart` , {headers})
    .then((res)=> res)
    .catch((err)=> err)
}

function deleteCartItem(productId){
  return  axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{headers})
  .then((res)=> res)
  .catch((err) => err)
}
function Checkout(cardId , url ,formData){
  return  axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cardId}?url=${url}`,{shippingAddress:formData},{headers})
  .then((res)=> res)
  .catch((err) => err)
}

useEffect(()=> {
    getLoggedUserCart()
},[])

    return <CartContext.Provider value={ {numberItems,setnumberItems,cartId, Checkout,deleteCartItem , updateCartProductQuantity ,addProductToCard ,  getLoggedUserCart} }>

{props.children}
    </CartContext.Provider>
}