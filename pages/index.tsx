import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10
    to-[#010511] lg:h-[140vh]">{/*Griden siyaha çizgili bir şekilde scroll yazıldı */}
      <Head>
        <title>Ana Sayfa - Movie App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header/>
      <main>
        <Banner/>
        <section>
          {/*row*/}
          {/*row*/}
          {/*row*/}
          {/*row*/}
          {/*row*/}
        </section>
        {/*Modal gelecek*/}
      </main>
    </div>
  )
}

export default Home
