import {create} from 'zustand'

interface contador{
    cantidad: number
    incrementar: (numero:number)=> void
    decrementar:(numero:number)=>void
}

export const stateCount = create<contador>((set)=>({
    cantidad:1,
    incrementar: (numero)=> set((state)=>({cantidad:state.cantidad + numero})),
    decrementar: (numero)=>set((state)=>({ cantidad: state.cantidad - numero}))
}))

