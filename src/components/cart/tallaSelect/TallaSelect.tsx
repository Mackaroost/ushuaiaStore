interface Props {
  size?: string[];
}

const TallaSelect = ({ size }: Props) => {
  return (
    <div className="py-2">
      <p className="text-sm font-semibold text-zinc-600">Tallas</p>
      <div className="flex gap-3 flex-wrap pt-2">
        {size?.map((item, index) => (
          <div
            key={index}
            className="px-4 text-black text-md font-bold cursor-pointer border rounded hover:bg-slate-950 hover:text-white"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TallaSelect;
