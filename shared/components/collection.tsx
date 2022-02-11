import Card from './card'
export default function Collection() {
  return (
    <div className="mt-[5vh]  grid justify-items-center">
      <p className="mb-[1vh] text-5xl font-bold">Collection</p>
      <p className="mb-[4vh] text-xl text-[#FFFFFF80]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="grid grid-cols-4 gap-10">
        <Card img="/1.png" />
        <Card img="/2.png" />
        <Card img="/3.svg" />
        <Card img="4.jpeg" />
        <Card img="5.svg" />
        <Card img="6.png" />
        <Card img="7.png" />
        <Card img="9.png" />
        <Card img="10.png" />
        <Card img="11.png" />
        <Card img="12.png" />
        <Card img="13.png" />
      </div>
    </div>
  )
}
