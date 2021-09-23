import notion from "./utils/initNotion"

const coffee_db_id = process.env.NOTION_COFFEE_DATABASE_ID

export const getCoffees = async () => {
  return notion.databases.query({
    database_id: coffee_db_id
  })
}
