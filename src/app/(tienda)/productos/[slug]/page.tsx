import obtenerProductoSlug from "@/actions/obtenerProductoSlug";
import Contador from "@/components/cart/contador/Contador";
import Link from "next/link";
import TallaSelect from "@/components/cart/tallaSelect/TallaSelect";

interface Props {
  params: {
    slug: string;
  };
}

const ProductosDetalles = async ({ params }: Props) => {
  const slug = params.slug;
  const res = await obtenerProductoSlug(slug);

  if (!res) {
    return (
      <div className="text-center py-10">
        <p className="text-2xl font-bold">Producto no encontrado</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 bg-gradient-to-r shadow-lg p-4 m-4 rounded-md container mx-auto">
      {/* Sección de imágenes */}
      <div className="col-span-1 md:col-span-2 h-[500px] mr-3 flex items-center justify-center">
        <h2 className="text-xl font-semibold">Imágenes del producto</h2>
      </div>

      {/* Detalles del producto */}
      <div className="col-span-1 md:col-span-1">
        <p className="text-4xl font-bold py-2">{res?.nombre}</p>
        <p className="text-2xl font-semibold">${res?.precio}</p>

        {/* Selector de talla */}
        {res.talla && res.talla.length > 0 ? (
          <TallaSelect size={res.talla} />
        ) : (
          <p className="text-sm text-zinc-500 py-4">Este producto no tiene tallas disponibles.</p>
        )}

        {/* Contador para cantidad */}
        <Contador />

        {/* Descripción del producto */}
        <p className="pt-4 text-zinc-600 font-bold text-sm">Descripción</p>
        <p className="py-2 text-justify text-zinc-600 leading-relaxed text-sm">{res.descripcion}</p>

        {/* Botón para agregar al carrito */}
        <div className="py-4 text-center">
          <Link
            href="/cart"
            className="px-8 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
          >
            Agregar al Carrito
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductosDetalles;
