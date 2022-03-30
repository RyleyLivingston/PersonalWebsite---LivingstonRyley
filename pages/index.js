import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ryley Livingston</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Ryley Livingston" />
        <p className="description">
          Check out my Socials
          
        </p>
      </main>

      <Footer />
    </div>
  )
}
