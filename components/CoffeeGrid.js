import useSWR from 'swr'
import fetcher from '../lib/fetcher'
import coffees from "../pages/api/coffees"

export default function CoffeeGrid({isCurrentBrew}) {
  let coffees = []
  const {data} = useSWR('/api/coffees', fetcher)

  if (!data) {
    return null
  }

  if (isCurrentBrew) {
    coffees = data.coffees.filter((coffee) => coffee.isCurrentBrew === true)
  } else {
    coffees = data.coffees.filter((coffee) => coffee.isCurrentBrew === false)
  }

  return (
    <>
      {JSON.stringify(coffees)}
    </>
  )
}
