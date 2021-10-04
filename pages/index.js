import Head from 'next/head'
import Image from "next/image"
import {useRouter} from 'next/router'

import CoffeeGrid from "../components/CoffeeGrid"
import CountUp from "react-countup"
import {siteMetadata} from "../data/siteMetadata"

export default function Home() {

  const router = useRouter()

  const storageBucket = "https://firebasestorage.googleapis.com/v0/b/shariq-dev.appspot.com/o/coffee%2F"
  const altTag = "?alt=media"
  const coffeeCups = 226
  const coffeeOunces = 84
  const pourMinutes = 570
  const waterOunces = 1808

  return (
    <>
      <Head>
        <title>{`${siteMetadata.title}`}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={siteMetadata.description} />
        <meta property="og:url" content={`${siteMetadata.siteUrl}${router.asPath}`}/>
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content={siteMetadata.title}/>
        <meta property="og:description" content={siteMetadata.description}/>
        <meta property="og:title" content={siteMetadata.title}/>
        <meta property="og:image" content={`${siteMetadata.siteUrl}${siteMetadata.socialBanner}`}/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={siteMetadata.title}/>
        <meta name="twitter:description" content={siteMetadata.description}/>
        <meta name="twitter:image" content={`${siteMetadata.siteUrl}${siteMetadata.socialBanner}`}/>
      </Head>
      <div
        className="bg-gradient-to-r from-[#C8AB8F] to-[#A78D6B] min-w-max md:overflow-scroll md:overflow-x-hidden">
        <header className="min-w-screen h-16">
          <div className="flex p-4 max-w-screen-lg">
            <p className="font-bold uppercase text-9xl md:text-6xl text-white">coffee addict.</p>
          </div>
        </header>
        <main
          className="py-80 md:py-44 lg:py-0 lg:pb-24 mx-8 lg:px-8 lg:mx-auto space-y-96 lg:space-y-0 max-w-screen-lg">
          <div className="lg:flex md:min-h-screen lg:py-16 lg:place-items-center">
            <div className="space-y-4 lg:flex-shrink-0">
            <span
              className="px-1 font-semibold text-8xl lg:text-7xl text-[#A78D6B] uppercase bg-gray-100 drop-shadow-2xl">
              quick stats.
            </span>
              <p className="font-semibold text-7xl lg:text-5xl text-white">
                <CountUp end={coffeeCups} duration="1.5"/>
                &nbsp;cups of coffee made.
              </p>
              <p className="font-semibold text-6xl lg:text-4xl text-white">
                <CountUp end={coffeeOunces} duration="1"/>
                &nbsp;ounces of coffee consumed.
              </p>
              <p className="font-semibold text-5xl lg:text-3xl text-white">
                <CountUp end={pourMinutes} duration="2"/>
                &nbsp;minutes of pouring.</p>
              <p className="font-semibold text-4xl lg:text-2xl text-white">
                <CountUp end={waterOunces} duration="2.5"/>
                &nbsp;ounces of water consumed.</p>
            </div>
            <div className="flex lg:flex-grow justify-center lg:justify-end">
              <div className="relative w-[1024px] h-[656px] overflow-visible">
                <Image
                  placeholder="blur"
                  blurDataURL={storageBucket + 'hero.png' + altTag}
                  src={storageBucket + 'hero.png' + altTag}
                  alt="banner image"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-8 md:min-h-screen justify-center">
            <h1
              className="px-1 font-semibold text-8xl lg:text-7xl text-white uppercase underline drop-shadow-2xl">
              now brewing.
            </h1>
            <CoffeeGrid isCurrentBrew/>
          </div>
          <div className="flex flex-col md:min-h-screen justify-center">
            <h1
              className="px-1 font-semibold text-8xl lg:text-7xl text-white uppercase underline drop-shadow-2xl">
              brew tools.
            </h1>
            Coming soon...
          </div>
          <div className="flex flex-col space-y-8 md:min-h-screen justify-center">
            <h1
              className="px-1 font-semibold text-8xl lg:text-7xl text-white uppercase underline drop-shadow-2xl">
              past brews.
            </h1>
            <CoffeeGrid/>
          </div>
        </main>
      </div>
    </>
  )
}
