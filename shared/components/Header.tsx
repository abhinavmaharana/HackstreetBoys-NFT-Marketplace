import Link from 'next/link'

export default function Header() {
  return (
    <header className="top-0 z-50 grid grid-cols-2  py-2 px-5 md:px-10">
      <div className="grid grid-cols-3">
        {/* Left */}
        <div className="relative my-auto flex h-5 cursor-pointer items-center space-x-6 text-center">
          <h1 className="text-xl">PsychoArt</h1>
        </div>
        {/* Middle - Search */}
        <div className="ml-[-30px] flex w-[300px] items-center rounded-lg border-[#282828] bg-[#282828] py-2 md:border-2 md:shadow-sm xl:ml-[-60px] xl:w-[470px] 2xl:ml-[-80px] 2xl:w-[400px]">
          <input
            className="flex-grow bg-[#282828] pl-6  text-sm text-white placeholder-white outline-none"
            type="text"
            placeholder={'Start your search'}
          />
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center justify-end space-x-12  text-white">
        <Link href="#collection">
          <h3 className="cursor-pointer font-[Roboto] font-normal transition duration-150 ease-in hover:text-[#A435F0]">
            Collections
          </h3>
        </Link>
        <Link href="#feature">
          <h3 className="cursor-pointer font-[Roboto] font-normal transition duration-150 ease-in hover:text-[#A435F0]">
            Feature
          </h3>
        </Link>
        <h3 className="cursor-pointer font-[Roboto] font-normal transition duration-150 ease-in hover:text-[#A435F0]">
          FAQ
        </h3>
        <button className="rounded-md bg-gradient-to-b from-[#B75CFF] to-[#671AE4] py-3 px-6">
          Select Wallet
        </button>
      </div>
    </header>
  )
}
