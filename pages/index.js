import Head from 'next/head'
import Image from "next/image"
import CoffeeGrid from "../components/CoffeeGrid"
import CountUp from "react-countup"

export default function Home() {
  const coffeeCups = 226
  const coffeeOunces = 84
  const pourMinutes = 570
  const waterOunces = 1808

  return (
    <div
      className="bg-gradient-to-r from-[#C8AB8F] to-[#A78D6B] min-w-max md:h-screen md:overflow-scroll md:overflow-x-hidden md:snap md:snap-y md:snap-mandatory">
      <header className="md:snap-start min-w-screen h-16">
        <div className="flex p-4 max-w-screen-lg">
          <p className="font-bold uppercase text-6xl text-white">coffee.</p>
        </div>
      </header>
      <main className="py-80 md:py-0 mx-8 lg:px-8 lg:mx-auto space-y-96 md:space-y-0 max-w-screen-lg">
        <div className="md:snap-start lg:flex md:h-screen md:py-16 lg:place-items-center">
          <div className="space-y-4">
            <span
              className="px-1 font-semibold text-8xl lg:text-7xl text-[#A78D6B] uppercase bg-gray-100 drop-shadow-2xl">
              quick stats.
            </span>
            <p className="font-semibold text-6xl lg:text-5xl text-white">
              <CountUp end={coffeeCups} duration="1"/>
              &nbsp;cups of coffee made.
            </p>
            <p className="font-semibold text-5xl lg:text-4xl text-white">
              <CountUp end={coffeeOunces} duration="1"/>
              &nbsp;ounces of coffee consumed.
            </p>
            <p className="font-semibold text-4xl lg:text-3xl text-white">
              <CountUp end={pourMinutes} duration="1"/>
              &nbsp;minutes of pouring.</p>
            <p className="font-semibold text-3xl lg:text-2xl text-white">
              <CountUp end={waterOunces} duration="1"/>
              &nbsp;ounces of water consumed.</p>
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
        </div>
        <div className="flex flex-col md:snap-start space-y-8 md:h-screen justify-center">
          <h1
            className="px-1 font-semibold text-8xl lg:text-7xl text-white uppercase underline drop-shadow-2xl">
            now brewing.
          </h1>
          <CoffeeGrid isCurrentBrew/>
        </div>
        <div className="flex flex-col md:snap-start md:h-screen justify-center">
          <h1
            className="px-1 font-semibold text-8xl lg:text-7xl text-white uppercase underline drop-shadow-2xl">
            brew tools.
          </h1>
          Coming soon...
        </div>
        <div className="flex flex-col md:snap-start space-y-8 md:h-screen justify-center">
          <h1
            className="px-1 font-semibold text-8xl lg:text-7xl text-white uppercase underline drop-shadow-2xl">
            past brews.
          </h1>
          <CoffeeGrid/>
        </div>
      </main>
    </div>
  )
}
