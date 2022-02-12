import CreatorCard from './creatorCard'
export default function TopCreator() {
  return (
    <div id="ourTeam" className="mt-[10vh] mb-[5vh] grid justify-items-center">
      <p className="mb-[1vh] text-5xl font-bold">Top Creators</p>
      <p className="mb-[4vh] text-xl text-[#FFFFFF80]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="grid grid-cols-4 gap-7">
        <CreatorCard
          img="/creator3.jpeg"
          profile="/rick.png"
          name="Pratham"
          tagline="You are the artist of your own life.Don’t hand the paintbrush to anyone else."
        />
        <CreatorCard
          img="/bg1.jpg"
          profile="/morty.png"
          name="Farhan"
          tagline="Curiosity is the best motivation."
        />
        <CreatorCard
          img="/creator2.jpeg"
          profile="/jerry.png "
          name="Abhinav"
          tagline="Believe you can and you're halfway there."
        />
        <CreatorCard
          img="/creator1.jpeg"
          profile="/summer1.png"
          name="Karan"
          tagline="Creativity doesn't wait for that perfect moment"
        />
      </div>
    </div>
  )
}
