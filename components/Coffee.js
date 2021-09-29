import {ChevronUpIcon, ShoppingCartIcon, ExternalLinkIcon} from "@heroicons/react/outline"
import {Disclosure} from '@headlessui/react'
import Link from 'next/Link'
import Image from 'next/Image'

export default function Coffee({coffee}) {
  return (
    <>
      <div className="bg-yellow-100 hover:bg-[#FFF8EA] hover:shadow-2xl opacity-60 rounded-xl">
        <div className="px-4 py-2">
          <span className="font-semibold uppercase text-4xl md:text-2xl xl:text-xl">{coffee.brand}</span>
          <p className="font-extralight text-2xl md:text-2xl xl:text-xl hidden md:block">{coffee.location}</p>
          <h2 className="pb-2 font-semibold text-7xl md:text-5xl xl:text-4xl">{coffee.name}</h2>
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
                } w-full px-4 py-2 text-sm font-medium text-left bg-green-600 opacity-70 hover:bg-green-400`}>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } mx-auto h-12 xl:h-6 w-12 text-[#FFF8EA]`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 text-2xl text-white bg-green-600 opacity-70 rounded-b-xl">
                <p>{coffee.rating}</p>
                <p>{coffee.roastLevel}</p>
                {coffee.price}
                {coffee.weight} oz.
                {/*<Image*/}
                {/*  placeholder="blur"*/}
                {/*  blurDataURL={coffee.imageLink}*/}
                {/*  src={coffee.imageLink}*/}
                {/*  alt=""*/}
                {/*  layout="fill"*/}
                {/*  objectFit="contain"*/}
                {/*/>*/}
                <Link href={coffee.productLink}><a><ExternalLinkIcon className="h-6 w-6"/></a></Link>
                <Link href={coffee.purchaseLink}><a><ShoppingCartIcon className="h-6 w-6"/></a></Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  )
}
