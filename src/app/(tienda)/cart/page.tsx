"use client";

import { cartStore } from "@/store/storeCart/cartStore";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const cartProd = cartStore((state) => state.cart);
  const eliminar = cartStore((state)=> state.eliminar)

  // Calcular el total del carrito
  const total = cartProd.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-center md:text-start py-10 md:pl-20 text-2xl font-bold text-black">
        Productos en el Carrito
      </h2>

      <div className="container mx-auto md:pl-20 flex flex-col justify-center items-center md:flex-row gap-8">
        {/* Contenedor de productos */}
        <div className="flex-1 space-y-4 ">
          {
          cartProd.map((item, index) => (
            <div key={index} className="flex justify-between items-center p-6 bg-red-500">
              {/* Imagen y detalles */}
              <div className="flex items-center space-x-6 bg-amber-200">
                <Image src={"/"} width={120} height={120} alt={item.nombre} className="rounded-lg" />
                <div className="p-4">
                  <p className="text-black font-semibold text-sm md:text-lg">{item.nombre}</p>
                  <p className="text-gray-600 text-sm md:text-lg">A personalizar</p>
                  <p className="text-black font-semibold text-sm md:text-lg">{item.talla ? item.talla : "Sin talla"}</p>
                  <p className="text-gray-700 text-sm md:text-lg">Cantidad: {item.cantidad}</p>
                </div>
              </div>

              {/* Precio alineado a la derecha */}
              <div className="text-black font-semibold text-base  md:text-xl">
                <p className="text-gray-800">${item.precio}</p>
              </div>
              <div className = 'bg-slate-600 ml-6'>
              <button onClick= {()=>{eliminar(item.id)}}>
                X
              </button>
              </div>
            </div>
          ))}
        </div>
        <div className="md:flex-1  md:rounded-xl p-6 mx-10 bg-white md:shadow-lg flex flex-col justify-center">
          <h3 className="text-base md:text-2xl  font-bold text-gray-800">Resumen del Pedido</h3>
          <p className="text-gray-700 mt-4 text-base">Cantidad : <span className="font-bold">{cartProd.length}</span></p>
          <p className="text-gray-700 text-base py-2">Subtotal: <span className="font-bold text-black text-base">${total.toFixed(2)}</span></p>
          <p className=" text-red-500 text-xs">Para finalizar la compra debes iniciar sesion</p>
          <Link
          href = {'/Auth/login'} 
          className={`${ cartProd.length === 0 ? "bg-gray-400 cursor-not-allowed disabled" : "bg-red-500"} text-center mt-4 py-3 text-white rounded hover:bg-red-600 transition-colors`}
           >
          Completar Compra
          </Link>
        </div>
      </div>
    </div>
  );
}
