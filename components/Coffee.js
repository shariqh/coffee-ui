import {ChevronUpIcon, ShoppingCartIcon, ExternalLinkIcon, StarIcon} from "@heroicons/react/outline"
import {Disclosure} from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image'
import {RoastSlider} from "./RoastSlider"

export default function Coffee({coffee}) {
  const storageBucket = "https://firebasestorage.googleapis.com/v0/b/shariq-dev.appspot.com/o/coffee%2F"
  const altTag = "?alt=media"
  const pricePerOz = coffee.price / coffee.weight

  const usdFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <>
      <div className="bg-yellow-100 hover:bg-[#FFF8EA] hover:shadow-2xl rounded-xl">
        <div className="px-4 py-8 md:py-2">
          <span className="font-semibold uppercase text-4xl md:text-2xl xl:text-xl">{coffee.brand}</span>
          <p className="font-extralight text-2xl md:text-2xl xl:text-xl hidden md:block">{coffee.location}</p>
          <h2 className="pb-4 font-semibold text-7xl md:text-5xl xl:text-4xl">{coffee.name}</h2>
          {coffee.attributes.map((attr) => (
            <span
              className="bg-blue-100 text-blue-800 text-5xl md:text-xl font-medium mr-2 px-2.5 rounded-md align-top">{attr}
            </span>
          ))}
        </div>
        <Disclosure>
          {({open}) => (
            <>
              <Disclosure.Button
                className={`${
                  open ? 'rounded-none' : 'rounded-b-xl'
                } w-full px-4 py-2 text-sm font-medium text-left bg-[#77a780] hover:bg-[#96BB9D]`}>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } mx-auto h-12 xl:h-6 w-12 text-[#FFF8EA]`}
                />
              </Disclosure.Button>
              <Disclosure.Panel
                className="p-4 space-y-8 lg:space-y-2 text-2xl text-white bg-[#77a780] rounded-b-xl">
                <div
                  className="relative flex mx-auto h-[650px] w-[650px] md:h-96 md:w-96 lg:h-64 lg:w-64 rounded-full bg-yellow-100 shadow-xl">
                  {coffee.imageLink ? <Image
                      placeholder="blur"
                      blurDataURL={storageBucket + coffee.imageLink + altTag}
                      src={storageBucket + coffee.imageLink + altTag}
                      alt="banner image"
                      layout="fill"
                      objectFit="contain"
                    /> :
                    <svg xmlns="http://www.w3.org/2000/svg" className="pl-4 pb-4 m-auto w-48 h-48" viewBox="0 0 24 24">
                      <path
                        d="M13 20h-7c-2.174-3.004-4-6.284-4-12h15c0 5.667-1.88 9.089-4 12zm5.119-10c-.057.701-.141 1.367-.252 2h1.55c-.449 1.29-1.5 2.478-2.299 2.914-.358 1.038-.787 1.981-1.26 2.852 3.274-1.143 5.846-4.509 6.142-7.766h-3.881zm-7.745-3.001c4.737-4.27-.98-4.044.117-6.999-3.783 3.817 1.409 3.902-.117 6.999zm-2.78.001c3.154-2.825-.664-3.102.087-5.099-2.642 2.787.95 2.859-.087 5.099zm9.406 15h-15v2h15v-2z"/>
                    </svg>
                  }
                </div>
                <span className="flex justify-between text-5xl lg:text-3xl">
                  <div className="align-bottom rounded-xl w-96 bg-gradient-to-r from-yellow-100 to-yellow-900">
                    <ul>
                      <li>
                        <ul className="grid grid-cols-10 h-8">
                          {[...Array(10)].map((_, i) => (
                            <RoastSlider key={i} index={i} roastLevel={coffee.roastLevel}/>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <p>{usdFormatter.format(pricePerOz)} / oz.</p>
                </span>
                <div className="flex px-24 bg-[#3B5340] min-h-[200px] rounded-xl">
                  {coffee.rating && <p className="m-auto pr-16 text-8xl lg:text-7xl">{coffee.rating}</p>}
                  <p className="m-auto text-4xl lg:text-3xl">{coffee.review}</p>
                </div>
                <div className="flex mx-4 justify-between">
                  <Link href={coffee.productLink}><a><ExternalLinkIcon className="h-16 lg:h-8 w-16 lg:w-8"/></a></Link>
                  <Link href={coffee.purchaseLink}><a><ShoppingCartIcon className="h-16 lg:h-8 w-16 lg:w-8"/></a></Link>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  )
}
