import {prisma} from '@/lib/prisma'

export const obtenerProductoSlug = async(slug:string) => {
 return await prisma.productos.findFirst({
    where:{
        slug: slug
    }
 })
}

