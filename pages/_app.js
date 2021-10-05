import 'tailwindcss/tailwind.css'
import Analytics from "../components/analytics"

function MyApp({Component, pageProps}) {
  return (
    <>
      <Analytics />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
