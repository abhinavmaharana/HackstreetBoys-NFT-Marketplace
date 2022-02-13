import Card from './card'

export default function FeaturedArtwork() {
  return (
    <div className="mt-[10vh]  grid justify-items-center" id="feature">
      <p className="mb-[1vh] text-center text-5xl font-bold">
        Featured Artworks
      </p>
      <p className="mb-[4vh] text-center text-xl text-[#FFFFFF80]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
        <Card
          img="/1.jpeg"
          price={'100 ETH'}
          name={'Sassy Ninja'}
          creator={'Farhan'}
        />
        <Card
          img="/2.jpeg"
          price={'1 ETH'}
          name={'Crazy Robot'}
          creator={'Pratham'}
        />
        <Card
          img="/4.jpeg"
          price={'0.0001 ETH'}
          name={'Tasty Egg'}
          creator={'Karan'}
        />
      </div>
    </div>
  )
}
