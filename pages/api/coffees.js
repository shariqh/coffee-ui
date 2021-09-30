import { getCoffees } from "../../lib/notion"

export default async (_, res) => {
  const response = await getCoffees()
  const { results } = await response

  const coffees = results.map((coffee) => ({
    name: coffee.properties?.name?.title[0]?.plain_text,
    isLimitedRun: coffee.properties?.is_limited_run?.checkbox,
    productLink: coffee.properties?.product_link?.url,
    imageLink: coffee.properties?.image?.url,
    roastDate: coffee.properties?.roast_date?.date?.start,
    weight: coffee.properties?.weight?.number,
    rating: coffee.properties?.rating?.select?.name,
    review: coffee.properties?.review?.rich_text[0]?.plain_text,
    roastLevel: coffee.properties?.roast_level?.select?.name,
    location: coffee.properties?.location?.rich_text[0]?.plain_text,
    brand: coffee.properties?.brand?.select?.name,
    attributes: (coffee.properties?.attributes?.multi_select).map((attr) => (attr.name)),
    purchaseLink: coffee.properties?.purchase_link?.url,
    price: coffee.properties?.price?.number,
    lastPurchasedDate: coffee.properties?.last_purchased_date?.date?.start,
    isCurrentBrew: coffee.properties?.is_current_brew?.checkbox
  }))

  return res.status(200).json({ coffees })
}

