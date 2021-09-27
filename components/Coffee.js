export default function Coffee({coffee}) {
  return (
    <>
      <div className="bg-yellow-100 hover:bg-[#FFF8EA] hover:shadow-2xl opacity-60 rounded-xl text-4xl">
        <div className="p-4 space-y-2">
          <div>
            <p className="font-semibold uppercase text-3xl md:text-2xl xl:text-xl">{coffee.brand}</p>
            <h2 className="font-semibold text-6xl md:text-5xl xl:text-4xl">{coffee.name}</h2>
          </div>
          <p className="font-extralight md:text-2xl xl:text-xl">{coffee.location}</p>
        </div>
      </div>
    </>
  )
}
