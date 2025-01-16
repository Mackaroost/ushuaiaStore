import { PrismaClient } from '@prisma/client'
import { categorias } from './data/categorias';
import { productos } from './data/productos';

const prisma  = new PrismaClient()

async function main(){
    try {
        await prisma.categorias.createMany({
            data: categorias
        })
        await prisma.productos.createMany({
            data:productos
        })
    } catch (error) {
      console.log(error)  
    }
}
main()
.then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })