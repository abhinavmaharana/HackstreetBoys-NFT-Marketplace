import Link from 'next/link'
import SassyNinja from '../threeModel'

export default function Banner() {
  return (
    <div className="max-w-8xl mx-auto mt-8 grid items-center px-8 sm:px-16 lg:grid-cols-1 xl:mt-[150px] xl:ml-[-18px] xl:grid-cols-2 2xl:mt-[95px] 2xl:ml-[-30px]">
      <div className="grid grid-cols-1 items-center xl:w-[1000px] xl:grid-cols-2 2xl:w-[1000px] ">
        <div className="grid grid-rows-3 text-center xl:gap-y-[55px] xl:text-left 2xl:gap-y-[60px]">
          <h1 className=" text-6xl font-bold ">
            Create, Sell & Collect Your Own Creative NFT
          </h1>
          <p className="text-2xl">Dive into the world of NFTs.</p>
          <div className="grid grid-cols-2 xl:mt-[-140px] xl:space-x-4">
            <Link href="#collection">
              <button className="h-[60px]  w-[150px] rounded-lg bg-gradient-to-b from-[#B75CFF] to-[#671AE4] text-white shadow-md hover:font-bold sm:w-[150px] md:w-[250px] xl:ml-0 xl:w-[250px]">
                Explore Now
              </button>
            </Link>
            <Link href="/collections/0xEfa2Eb9FFc3c8DBf967373415D608f7fB41A129f">
              <button className="h-[60px] w-[150px] rounded-lg bg-[#282828] shadow-md outline-none hover:font-bold sm:w-[150px] md:w-[250px] lg:ml-[20px] xl:w-[250px]">
                Sell NFT
              </button>
            </Link>
          </div>
          <div className="ml-[-60px] grid grid-cols-3 xl:mt-[-250px] 2xl:mt-[-280px]">
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
