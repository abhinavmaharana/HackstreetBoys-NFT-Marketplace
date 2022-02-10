import Head from 'next/head'
import Header from '../shared/components/Header/Header'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>PsychoArt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className='max-w-8xl mx-auto px-8 sm:px-16'>
        <section className='mt-6'>
        <Header />
        </section>
      </main> 
    </div>
  )
}
