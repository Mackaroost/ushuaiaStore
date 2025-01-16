
import {prisma} from '@/lib/prisma'

export default async function obtenerProductos() {
  try {
    const productos = await prisma.productos.findMany();
    return productos
  } catch (error) {
    console.log("Error al obtener productos:", error);
    return [];
  }
}