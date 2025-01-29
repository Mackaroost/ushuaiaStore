"use client"

import { cartStore } from "@/store/storeCart/cartStore"


export default function cartPage(){

  const cartProd = cartStore((state)=> state.cart)
  console.log(cartProd)
  return (
    <div className = "container h-screen bg-red-400 mx-auto">

    <div className=" text-center md:text-start py-10 md:pl-20">
      <h2 className = "text-xl font-bold text-black">Productos en el Carrito</h2>
    </div>

    <div>

    </div>

    </div>
  )
}
