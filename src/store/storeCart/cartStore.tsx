import { create } from 'zustand';
import { MinimalCartProducts } from '../../interfaces/interface';

// Interfaz para el estado de la tienda
interface State {
  cart: MinimalCartProducts[];
  agregar: (productos: MinimalCartProducts) => void;
}

// Crear la tienda Zustand
export const cartStore = create<State>((set, get) => ({
  cart: [],
  agregar: (productos: MinimalCartProducts) => {
    const { cart } = get();

    const productoEx = cart.some((item) => item.id === productos.id && item.talla === productos.talla);

    if (!productoEx) {
      set({ cart: [...cart, productos] });
      return;
    }

    const cartReload = cart.map((item) => {
      if (item.id === productos.id && item.talla === productos.talla) {
        return { ...item, cantidad: item.cantidad + productos.cantidad };
      }
      return item;
    });

    set({ cart: cartReload });
  },
}));
