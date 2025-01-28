import {create} from  'zustand'

interface tallaState {
   talla: string
    actualizarTalla:(talla:string)=> void
}

export const tallaStore = create<tallaState>()((set)=>({
    talla:'',
    actualizarTalla:(talla: string)=>set({talla: talla})
}))