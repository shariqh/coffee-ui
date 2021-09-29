import {getCoffeePage, getCoffees} from "../../lib/notion"
import CountUp from "react-countup"
import Image from "next/image"
import CoffeeGrid from "../../components/CoffeeGrid"

export default function CoffeePage({coffee}) {

  return (
    <div className="bg-gray-100 min-w-full">
      <header className="">
        <h1 className="p-8 bg-[#AB7C4A] text-center font-bold uppercase text-4xl text-[#F9DE99]">{coffee.name}</h1>
        <p className="lg:pl-4 text-sm">Roasted by <span className="text-lg font-semibold uppercase text-center">{coffee.brand}</span></p>
      </header>
      <main className="max-w-screen-lg min-h-screen">
      </main>
    </div>
  )
}


export async function getStaticPaths() {
  const {results} = await getCoffees();
  const paths = results.map((coffee) => ({
    params: {id: coffee.id},
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({params}) {
  const {id} = params;
  const {properties} = await getCoffeePage(id);

  const coffee = {
    name: properties.name?.title[0]?.plain_text || null,
    isLimitedRun: properties.is_limited_run?.checkbox || null,
    productLink: properties.product_link?.url || null,
    imageLink: properties.image?.url || null,
    roastDate: properties?.roast_date?.date?.start || null,
    weight: properties.weight?.number || null,
    rating: properties.rating?.select?.name || null,
    roastLevel: properties.roast_level?.select?.name || null,
    location: properties.location?.rich_text[0]?.plain_text || null,
    brand: properties.brand?.select?.name || null,
    attributes: (properties.attributes?.multi_select).map((attr) => (attr.name)) || null,
    purchaseLink: properties.purchase_link?.url || null,
    price: properties.price?.number || null,
    lastPurchasedDate: properties.last_purchased_date?.date?.start || null,
    isCurrentBrew: properties.is_current_brew?.checkbox || null
  }

  return {
    props: {
      coffee,
    },
  };
}




