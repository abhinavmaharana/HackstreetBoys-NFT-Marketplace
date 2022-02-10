import Card from './card'

export default function CardGrid() {
  return (
    <div className="grid grid-cols-4">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}
