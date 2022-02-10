export default function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 py-5 px-5 md:px-10">
        {/* Left */}
        <div className="relative flex items-center h-10 cursor-pointer my-auto">
          <h1>PsychoArt</h1>
        </div>
        {/* Middle */}
        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
          <input
            className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
            type="text"
            placeholder={'Start your search'}
          />
        </div>
        {/* Right */}
    </header>
  )
}
