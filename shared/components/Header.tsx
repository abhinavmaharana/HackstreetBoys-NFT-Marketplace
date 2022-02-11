export default function Header() {
  return (
    <header className="top-0 z-50 grid grid-cols-2  py-2 px-5 md:px-10">
        <div className="grid grid-cols-3">
        {/* Left */}
        <div className="relative flex items-center h-5 cursor-pointer my-auto space-x-6 text-center">
          <h1 className="text-xl">PsychoArt</h1>
        </div>
        {/* Middle - Search */}
        <div className="flex items-center md:border-2 bg-[#282828] border-[#282828] rounded-lg py-2 md:shadow-sm w-[300px] xl:ml-[-60px] 2xl:ml-[-80px] xl:w-[470px] 2xl:w-[400px] ml-[-30px]">
          <input
            className="flex-grow pl-6 bg-[#282828]  outline-none text-sm text-white placeholder-white"
            type="text"
            placeholder={'Start your search'}
          />
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center justify-end space-x-12  text-white">
        <h3 className="font-[Roboto] font-normal hover:text-[#A435F0] transition duration-150 ease-in">
          Collections
        </h3>
        <h3 className="font-[Roboto] font-normal hover:text-[#A435F0] transition duration-150 ease-in">
          Feature
        </h3>
        <h3 className="font-[Roboto] font-normal hover:text-[#A435F0] transition duration-150 ease-in">
          FAQ
        </h3>
        <button className="bg-gradient-to-b from-[#B75CFF] to-[#671AE4] py-3 px-6 rounded-md">Select Wallet</button>
      </div>
    </header>
  )
}
