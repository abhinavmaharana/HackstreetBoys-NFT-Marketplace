import { useState } from 'react'

export default function AboutUs() {
  const [view, setView] = useState(false)
  return (
    <div>
      <div className="mb-[150px]   grid justify-items-center">
        <p className="mb-[1vh] text-5xl font-bold">About Us</p>
        <p className="mb-[4vh] w-[50vw] text-center text-xl text-[#FFFFFF80]">
          We are one stop where you can create, mint and sell your own NFTs. We
          promote artists so that they can get real value of their art.
        </p>
        <div className=" grid grid-cols-2 gap-10">
          <div className="grid justify-items-center">
            <img
              src="/aboutus.jpg"
              className=" h-[600px]  rounded-[25px] "
            ></img>
          </div>
          <div className="py-[40px] px-[20px]">
            <p className=" text-4xl font-bold">Get Popular NFT</p>
            <p className="pt-[3vh] text-2xl text-[#ffffff70]">
              We provide a solution for new creators. We ensure that their NFT
              is given good promotion and help many people bag their first sale.
              This helps college creators to enter the new web3 and metaverse
              environment.
            </p>
            <label
              onClick={() => {
                setView(!view)
              }}
              className="mb-[20px] mt-[2vh] grid w-[250px] justify-items-center rounded-[15px] bg-gradient-to-b from-[#B75CFF] to-[#671AE4] py-[10px] hover:font-bold "
            >
              See More
            </label>
            {view ? (
              <div className="gap-15 mt-[7vh] grid grid-cols-2">
                <img src="/binance.svg"></img>
                <img src="/Ethereum.svg"></img>
                <img
                  src="/bct.svg"
                  className="col-span-2 mt-[2vh] px-[60px]"
                ></img>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
