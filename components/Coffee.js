import Link from 'next/link'

export default function Coffee({coffee}) {
  return (
    <Link href={`/coffee/${coffee.id}`}><a>

    <div className="group flex">
      <div
        className="bg-yellow-100 hover:bg-[#FFF8EA] hover:shadow-2xl opacity-60 rounded-xl w-full group-hover:min-w-0">
        <div className="px-4 py-2">
          <>
            <span className="font-semibold uppercase text-3xl md:text-2xl xl:text-xl">{coffee.brand}</span>
            <p className="font-extralight text-2xl md:text-2xl xl:text-xl hidden md:block">{coffee.location}</p>
            <h2 className="font-semibold text-6xl md:text-5xl xl:text-4xl">{coffee.name}</h2>
            {coffee.attributes.map((attr) => (
              <span
                className="bg-green-100 text-green-800 text-3xl md:text-xl font-medium mr-2 px-2.5 rounded-md align-top">{attr}</span>
            ))}
          </>
        </div>
      </div>
      <span className="hidden group-hover:block my-auto">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-white" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
        </svg>
      </span>
    </div>
    </a></Link>

  )
}
