"use client"

import TallaSelect from "@/components/cart/tallaSelect/TallaSelect";
import SelectCantidad from "@/components/cart/cantidad/SelectCantidad";
import Link from "next/link";
import { ProductosProps } from "@/interfaces/interface";
import { MinimalCartProducts } from "@/interfaces/interface";
import { stateCount } from "@/store/contadorCart/contador";
import { cartStore } from "@/store/storeCart/cartStore";
import { tallaStore } from "@/store/tallaState/tallaState";

interface Props {
  productos: ProductosProps;
}

export const AddCart = ({ productos }: Props) => {
  const cantidad = stateCount((state) => state.cantidad);
  const tallaSelect = tallaStore((state) => state.talla);
  const addToCart = cartStore((state) => state.agregar);
  //const cart = cartStore((state) => state.cart);
const checkTalla = productos.talla && productos.talla.length > 0

  const cartProducts: MinimalCartProducts = {
    id: productos.id,
    nombre: productos.nombre,
    precio: productos.precio,
    imagen: productos.imagen,
    categoriaId: productos.categoriaId,
    slug: productos.slug,
    talla: checkTalla ? tallaSelect : null,
    cantidad: cantidad,
  };

 // console.log(cart);

  return (
  
      <>
        
        {
        checkTalla && 
        <TallaSelect talla={productos.talla} />
        }
        <SelectCantidad />
  
        <div className="py-4 text-center">
          {checkTalla && !tallaSelect ? (
            // Si requiere talla pero no se ha seleccionado, deshabilita el botón
            <span className="px-8 py-2 bg-gray-400 text-white font-bold rounded cursor-not-allowed">
              Selecciona una talla
            </span>
          ) : (
            // Si no requiere talla o si se seleccionó, habilita el botón
            <Link
              href="/cart"
              onClick={() => addToCart(cartProducts)}
              className="px-8 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
            >
              Agregar al Carrito
            </Link>
          )}
        </div>
      </>
  );
};
