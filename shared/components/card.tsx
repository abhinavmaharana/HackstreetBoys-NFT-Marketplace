export default function Card() {
  return (
    <div className=" w-[300px] rounded-[10px] bg-[#ffffff10]">
      <img
        src="/collection3.svg"
        className="rounded-[10px]  object-cover px-[20px] pt-[20px]"
      ></img>
      <div className="grid grid-cols-2 px-[20px]">
        <p className="mt-[10px] font-main  text-[#FFFFFF80]">@Jonny</p>
        <p className="mt-[10px] ml-[20px] font-main text-[#FFFFFF80]">
          Currnt bid
        </p>
        <p className="pt-[2vh] font-bold">Yellow Painting</p>
        <p className="pl-[20px] font-bold">0.005 ETH</p>
      </div>
    </div>
  )
}
