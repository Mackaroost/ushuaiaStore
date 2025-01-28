"use client"

import { tallaStore } from "@/store/tallaState/tallaState";

interface Props {
  talla: string[]; 
}

const TallaSelect = ({ talla }: Props) => {
  const actualizarTalla = tallaStore((state) => state.actualizarTalla);
  const tallaSeleccionada = tallaStore((state) => state.talla);

  return (
    <div className="py-2">
      {talla && talla.length > 0 ? (
        <>
          <p className="text-sm font-semibold text-zinc-800">Tallas disponibles</p>
          <div className="flex gap-3 flex-wrap pt-2">
            {talla.map((item, index) => (
              <div
                key={index}
                className={`px-4 text-md font-bold cursor-pointer border rounded ${
                  tallaSeleccionada === item
                    ? "bg-slate-950 text-white"
                    : "hover:bg-slate-950 hover:text-white"
                }`}
                onClick={() => actualizarTalla(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-sm text-zinc-500 py-4">Este producto no tiene tallas disponibles.</p>
      )}
    </div>
  );
};

export default TallaSelect;
