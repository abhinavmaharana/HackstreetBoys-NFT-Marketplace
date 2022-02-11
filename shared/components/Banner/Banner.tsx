export default function Banner() {
  return (
    <div className="max-w-8xl mx-auto px-8 sm:px-16 mt-8 xl:mt-[150px] 2xl:mt-[95px] xl:ml-[-18px] 2xl:ml-[-30px] items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="grid grid-rows-3 gap-y-8">
                <h1 className="text-7xl font-bold">Create, Sell & Collect Your Own Creative NFT</h1>
                <p className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.</p>
                <div className="xl:mt-[-150px] space-x-4">
                    <button className="text-white bg-gradient-to-b from-[#B75CFF] to-[#671AE4] px-16 py-4 shadow-md rounded-lg">Explore Now</button>
                    <button className="bg-[#282828] outline-none px-12 py-4 shadow-md rounded-lg">Sell NFT</button>
                </div>
                <div className="xl:mt-[-250px] 2xl:mt-[-280px] grid grid-cols-3 xl:ml-[-80px]">
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl">31+</h1>
                        <p>Artworks</p>
                    </div>
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl">31+</h1>
                        <p>Artworks</p>
                    </div>
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl">31+</h1>
                        <p className="">Artworks</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="overflow-hidden">

        </div>
    </div>
  )
}
