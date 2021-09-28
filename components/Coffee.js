export default function Coffee({coffee}) {
  return (
    <>
      <div className="bg-yellow-100 hover:bg-[#FFF8EA] hover:shadow-2xl opacity-60 rounded-xl">
        <div className="px-4 py-2">
          <>
            <span className="font-semibold uppercase text-3xl md:text-2xl xl:text-xl">{coffee.brand}</span>
            <p className="font-extralight text-2xl md:text-2xl xl:text-xl hidden md:block">{coffee.location}</p>
            <h2 className="font-semibold text-6xl md:text-5xl xl:text-4xl">{coffee.name}</h2>
            {coffee.attributes.map((attr) => (
              <span className="bg-blue-100 text-blue-800 text-3xl md:text-xl font-medium mr-2 px-2.5 rounded-md align-top">{attr}</span>
            ))}
          </>
        </div>
      </div>
    </>
  )
}
