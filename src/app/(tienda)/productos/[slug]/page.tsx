import obtenerProductoSlug from "@/actions/obtenerProductoSlug"

interface Props{
    params:{
        slug: string
    }
}
const ProductosDetalles= async ({params}: Props) => {
    const slug =  params.slug
const res = await obtenerProductoSlug(slug)
console.log(res)

  return (
    <div className = "grid grid-cols-1 md:grid-cols-3">
        <div className = "col-span-1 md:col-span-2 bg-slate-600 my-4">
    <h2>Imagenes</h2>

        </div>
    
    </div>
  )
}

export default ProductosDetalles