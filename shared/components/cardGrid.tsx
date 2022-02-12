import Card from './card'

export default function CardGrid() {
  return (
    <div className="grid grid-cols-4 gap-7">
      <Card img="/1.png" price={''} name={''} creator={''} />
      <Card img="/2.png" price={''} name={''} creator={''} />
      <Card img="/3.svg" price={''} name={''} creator={''} />
      <Card img="4.jpeg" price={''} name={''} creator={''} />
      <Card img="5.svg" price={''} name={''} creator={''} />
      <Card img="6.png" price={''} name={''} creator={''} />
      <Card img="7.png" price={''} name={''} creator={''} />
      <Card img="9.png" price={''} name={''} creator={''} />
      <Card img="10.png" price={''} name={''} creator={''} />
      <Card img="11.png" price={''} name={''} creator={''} />
      <Card img="12.png" price={''} name={''} creator={''} />
      <Card img="13.png" price={''} name={''} creator={''} />
    </div>
  )
}
