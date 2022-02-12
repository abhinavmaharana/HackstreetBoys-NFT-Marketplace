import Link from 'next/link'

interface Props {
  img: string
}

export default function Card({ img }: Props) {
  return (
    <div className=" w-[300px] rounded-[10px] bg-[#ffffff10]  hover:bg-[#ffffff15] hover:shadow-2xl hover:shadow-[#603b79]">
      <div className="rounded-[20px]">
        <img
          src={img}
          className="h-[300px] w-[300px] object-cover px-[20px] pt-[20px] align-middle"
        />
      </div>

      <div className="grid grid-cols-2  px-[20px]">
        <p className="mt-[10px] font-main  text-[#FFFFFF80]">@Jonny</p>
        <p className=" mt-[10px] ml-[20px] grid justify-items-end font-main text-[#FFFFFF80]">
          Currnt bid
        </p>
        <p></p>
        <p className="  grid justify-items-end pl-[20px] font-bold">
          0.005 ETH
        </p>
      </div>
      <p className="mx-[20px] mt-[8px] mb-[20px] content-center justify-items-center text-xl font-bold">
        Yellow Painting
      </p>
      <Link href="/collections/0xEfa2Eb9FFc3c8DBf967373415D608f7fB41A129f">
        <label className="mx-[20px] mb-[20px] grid cursor-pointer justify-items-center rounded-[15px] bg-gradient-to-b from-[#B75CFF] to-[#671AE4] py-[10px] hover:font-bold ">
          Buy
        </label>
      </Link>
    </div>
  )
}
