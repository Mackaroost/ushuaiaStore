"use client"
import { stateCount } from '../../../store/contadorCart/contador';


const Contador = () => {
  const cantidad = stateCount(state=>state.cantidad)
  const sumarCantidad = stateCount(state=> state.incrementar)
  const restCantidad = stateCount(state=> state.decrementar)
  return (
    <div  className = "flex gap-x-3">
        <button onClick={()=> restCantidad(1)}>-</button>
          <div>{cantidad}</div>
        <button onClick={()=> sumarCantidad(1)}>+</button>

    </div>
  )
}

export default Contador