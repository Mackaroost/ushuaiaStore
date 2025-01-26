import {create} from  'zustand'

interface tallaState {
   talla: string | null
    actualizarTalla:(talla:string)=> void
}

export const tallaStore = create<tallaState>()((set)=>({
    talla:null,
    actualizarTalla:(talla: string)=>set({talla})
}))