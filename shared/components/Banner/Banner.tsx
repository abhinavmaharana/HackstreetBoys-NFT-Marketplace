import Link from 'next/link'
import SassyNinja from '../threeModel'

export default function Banner() {
  return (
    <div className="max-w-8xl mx-auto mt-8 grid grid-cols-2 items-center px-8 sm:px-16 xl:mt-[150px] xl:ml-[-18px] 2xl:mt-[95px] 2xl:ml-[-30px]">
      <div className="grid grid-cols-1 items-center lg:grid-cols-2 xl:w-[1000px] 2xl:w-[1000px] ">
        <div className="grid grid-rows-3 xl:gap-y-[55px] 2xl:gap-y-[60px]">
          <h1 className="text-6xl font-bold">
            Create, Sell & Collect Your Own Creative NFT
          </h1>
          <p className="text-2xl">Dive into the world of NFTs.</p>
          <div className="space-x-4 xl:mt-[-140px]">
            <Link href="#collection">
              <button className="h-[60px] w-[200px] rounded-lg bg-gradient-to-b from-[#B75CFF] to-[#671AE4] text-white shadow-md hover:font-bold">
                Explore Now
              </button>
            </Link>
            <button className="h-[60px] w-[200px] rounded-lg bg-[#282828] shadow-md outline-none hover:font-bold">
              Sell NFT
            </button>
          </div>
          <div className="grid grid-cols-3 xl:mt-[-250px] xl:ml-[-60px] 2xl:mt-[-280px]">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl">31+</h1>
              <p>Artworks</p>
            </div>
            <div className="space-y-2 text-center">
              <h1 className="text-3xl">31+</h1>
              <p>Artworks</p>
            </div>
            <div className="space-y-2 text-center">
              <h1 className="text-3xl">31+</h1>
              <p className="">Artworks</p>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <SassyNinja />
      </div>
    </div>
  )
}
