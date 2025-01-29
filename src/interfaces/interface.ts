

export interface ProductosProps {
    id:number;
    nombre: string;
    precio: number;
    imagen: string;
    categoriaId: number;
    slug: string;
    descripcion: string;
    talla: string[];
    imagenA: string;
    imagenB: string;
    imagenC: string;
}

 interface CartProducts{
    id:number;
    nombre: string;
    precio: number;
    imagen: string;
    categoriaId: number;
    slug: string;
    descripcion: string;
    talla: string | null;
    imagenA?: string;
    imagenB?: string;
    imagenC?: string; 
    cantidad: number;
}

export type MinimalCartProducts = Pick<CartProducts, "id" | "nombre" | "precio" | "imagen" | "categoriaId" | "slug" | "talla" | "cantidad">;
