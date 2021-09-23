import Head from 'next/head'
import Image from "next/image"
import CoffeeGrid from "../components/CoffeeGrid"

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#C8AB8F] to-[#A78D6B] min-w-max">
      <header className="min-w-screen h-16">
        <div className="flex p-4 max-w-screen-lg">
          <p className="font-bold uppercase text-6xl text-gray-100">coffee.</p>
        </div>
      </header>
      <main className="py-80 md:py-24 lg:py-0 mx-8 lg:px-8 lg:mx-auto space-y-96 lg:space-y-0 max-w-screen-lg">
        <banner className="lg:flex lg:h-screen lg:place-items-center">
          <div className="space-y-4">
            <h1 className="font-semibold text-8xl lg:text-7xl text-gray-300 uppercase underline">
              quick stats.
            </h1>
            <p className="font-semibold text-6xl lg:text-5xl text-gray-300">226 cups of coffee made.</p>
            <p className="font-semibold text-5xl lg:text-4xl text-gray-300">84 ounces of coffee consumed.</p>
            <p className="font-semibold text-4xl lg:text-3xl text-gray-300">9 1/2 hours of pouring.</p>
            <p className="font-semibold text-3xl lg:text-2xl text-gray-300">1808 ounces of water consumed.</p>
          </div>
          <div className="flex lg:flex-grow justify-center lg:justify-end">
            <div className='relative mt-16 w-96 h-96'>
              <Image
                placeholder="blur"
                blurDataURL="/static/images/chemex.png"
                src="/static/images/chemex.png"
                alt=""
                layout="fill"
              />
            </div>
          </div>
        </banner>
        <div className="space-y-8 lg:h-screen">
          <h1 className="font-semibold text-8xl lg:text-7xl text-gray-300 uppercase underline">
            now brewing.
          </h1>
          <CoffeeGrid isCurrentBrew/>
        </div>
        <div className="lg:h-screen">
          <h1 className="font-semibold text-8xl lg:text-7xl text-gray-300 uppercase underline">
            brew tools.
          </h1>
        </div>
        <div className="space-y-8 min-h-screen">
          <h1 className="font-semibold text-8xl lg:text-7xl text-gray-300 uppercase underline">
            past brews.
          </h1>
          <CoffeeGrid/>
        </div>
      </main>
    </div>
  )
}
