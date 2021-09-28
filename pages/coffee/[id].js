import {getCoffeePage, getCoffees} from "../../lib/notion"

export default function CoffeePage({coffee}) {

  return (
    <>
      {JSON.stringify(coffee)}
    </>
  )
}


export async function getStaticPaths() {
  const { results } = await getCoffees();
  const paths = results.map((coffee) => ({
    params: {id: coffee.id},
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const { properties } = await getCoffeePage(id);

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




