import { useState } from 'react'

interface Props {
  img: string
  profile: string
  name: string
  tagline: string
}

export default function CreatorCard({ img, profile, name, tagline }: Props) {
  const [isFollow, setFollow] = useState(false)

  return (
    <div className=" w-[300px] rounded-[10px] bg-[#ffffff10]  hover:bg-[#ffffff15] hover:shadow-2xl hover:shadow-[#603b79]">
      <div className="rounded-[20px]">
        <img src={img} className=" z-0 h-[200px] w-[300px] object-cover " />
      </div>
      <img
        src={profile}
        className="z-999 grid h-[50px] w-[50px] justify-items-center rounded-full xl:ml-[124px] xl:mt-[-25px]"
      ></img>

      <p className=" mb-[10px] grid content-center justify-items-center text-2xl font-bold">
        {name}
      </p>
      <p className="text-md mb-[25px] grid h-[40px] justify-items-center text-center text-[#FFFFFF80]">
        {tagline}
      </p>
      <div
        onClick={() => {
          setFollow(!isFollow)
        }}
      >
        {isFollow ? (
          <label className="cusrsor-pointer mx-[20px] mb-[20px] grid justify-items-center rounded-[15px] bg-[#d3cccc80] py-[10px]  font-bold ">
            + Followed
          </label>
        ) : (
          <label className="mx-[20px] mb-[20px] grid cursor-pointer justify-items-center rounded-[15px] bg-gradient-to-b from-[#B75CFF] to-[#671AE4] py-[10px] font-bold ">
            + Follow
          </label>
        )}
      </div>
    </div>
  )
}
