import {prisma} from '@/lib/prisma'

const obtenerProductoSlug = async (slug:string) => {
 return await prisma.productos.findFirst({
    where:{
        slug: slug
    }
 })
}

export default obtenerProductoSlug