import Image from "next/image";
import obtenerProductos from "@/actions/obtenerProductos";
import Link from "next/link";

export default async function PageProductos() {
  const productos = await obtenerProductos()
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-8">Nuestros Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productos.length > 0 ? (
          productos.map((producto) => (
            <div
              key={producto.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
            >
              <Image
              src={'/'}
              width={100}
              height={48}
                //src={producto.imagen || "/placeholder.png"}
                alt={producto.nombre}
                className=" object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">{producto.nombre}</h2>
              <p className="text-gray-600 mb-4">Precio: ${producto.precio}</p>
              <Link
              href={`/productos/${producto.slug}`}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors">
                Ver Detalles
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full">No hay productos disponibles</p>
        )}
      </div>
    </div>
  );
}




