import Head from 'next/head'
import Header from '../shared/components/Header'
import Collection from '../shared/components/collection'
import FeaturedArtwork from '../shared/components/featuredArtwork'
import TopCreator from '../shared/components/topCreator'
import Banner from '../shared/components/Banner/Banner'
import Faq from '../shared/components/faq'
import CollectNFT from '../shared/components/collectNFT'
import SassyNinja from '../shared/components/threeModel'
import Footer from '../shared/components/Footer'

export default function Home() {
  return (
    <div className=" ">
      <Head>
        <title>PsychoArt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-8xl mx-auto h-32 px-8 sm:px-16">
        <section className="mt-4">
          <Header />
        </section>
        <section className="mt-4">
          <Banner />
        </section>
        <Collection />
        <FeaturedArtwork />
        <TopCreator />
        <Faq />
        <CollectNFT />
        <Footer />
      </main>
    </div>
  )
}
