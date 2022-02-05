import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div className='background'>
      <nav className="border-b p-6 nav">
        <p className="text-4xl font-bold text-white">Encap Marketplace</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-white-500 font">
              Home
            </a>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 text-white-500 font">
              Sell Digital Asset
            </a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 text-purple-500 font">
              Purchases
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-6 text-purple-500 font">
              Creator Dashboard
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
