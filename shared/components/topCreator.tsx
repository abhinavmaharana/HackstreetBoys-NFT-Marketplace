import CreatorCard from './creatorCard'
export default function TopCreator() {
  return (
    <div className="mt-[10vh] mb-[5vh] grid justify-items-center">
      <p className="mb-[1vh] text-5xl font-bold">Top Creators</p>
      <p className="mb-[4vh] text-xl text-[#FFFFFF80]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="grid grid-cols-3 gap-7">
        <CreatorCard
          img="/creator3.svg"
          profile="/profile.jpg"
          name="Pratham"
        />
        <CreatorCard
          img="/creator2.svg"
          profile="/morty1.png "
          name="Abhinav"
        />
        <CreatorCard img="/creator3.svg" profile="/morty.jpeg" name="Karan" />
      </div>
    </div>
  )
}
