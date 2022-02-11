import Head from 'next/head'
import Header from '../shared/components/Header'
import Collection from '../shared/components/collection'
import FeaturedArtwork from '../shared/components/featuredArtwork'
import TopCreator from '../shared/components/topCreator'
import Banner from '../shared/components/Banner/Banner'
import Faq from '../shared/components/faq'
import CollectNFT from '../shared/components/collectNFT'
import SassyNinja from '../shared/components/threeModel'

export default function Home() {
  return (
    <div className="scrollbar-track-[#101010] scrollbar-thumb-rounded-xl h-[100vh] scrollbar-thin scrollbar-thumb-gray-800 ">
      <Head>
        <title>PsychoArt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-8xl mx-auto h-32 px-8 sm:px-16">
        <section className="mt-4">
          <Header />
        </section>
        <section className="mt-4 grid grid-cols-2">
          <Banner />
          <SassyNinja />
        </section>
        {/* <Collection />
        <FeaturedArtwork />
        <TopCreator />
        <Faq />
        <CollectNFT /> */}
      </main>
    </div>
  )
}
