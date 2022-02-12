import { useEffect } from 'react'
import Link from 'next/link'
import { useWeb3 } from '@3rdweb/hooks'
import { client } from '../../lib/sanityClient'
import toast, { Toaster } from 'react-hot-toast'

export default function Header() {
  const { address, connectWallet } = useWeb3()

  const welcomeUser = (userName, toastHandler = toast) => {
    toastHandler.success(
      `Welcome back${userName !== 'Unnamed' ? ` ${userName}` : ''}!`,
      {
        style: {
          background: '#04111d',
          color: '#fff',
        },
      }
    )
  }

  useEffect(() => {
    if (!address) return
    ;(async () => {
      const userDoc = {
        _type: 'users',
        _id: address,
        userName: 'Anonymous',
        walletAddress: address,
      }

      const result = await client.createIfNotExists(userDoc)
      welcomeUser(result.userName)
    })()
  }, [address])
  return (
    <header className="top-0 z-50 grid grid-cols-2  py-2 px-5 md:px-10">
      <div className="grid grid-cols-3">
        {/* Left */}
        <div className="relative my-auto flex h-5 cursor-pointer items-center space-x-6 text-center">
          <h1 className="text-2xl font-bold">
            Psycho<span className="text-[#9a0df8]">Art</span>
          </h1>
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
        <Link href="/collections/0xEfa2Eb9FFc3c8DBf967373415D608f7fB41A129f">
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
        <Toaster position="top-center" reverseOrder={false} />
        {address ? (
          <h3 className="cursor-pointer font-[Roboto] font-normal transition duration-150 ease-in hover:text-[#A435F0]">
            Hello Anonymous
          </h3>
        ) : (
          <button
            className="rounded-md bg-gradient-to-b from-[#B75CFF] to-[#671AE4] py-3 px-6"
            onClick={() => connectWallet('injected')}
          >
            Select Wallet
          </button>
        )}
      </div>
    </header>
  )
}
