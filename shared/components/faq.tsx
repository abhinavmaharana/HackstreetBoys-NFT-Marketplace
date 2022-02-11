import Faqtile from './faqTile'
export default function Faq() {
  return (
    <section id="collection">
      <div className="my-[150px]   grid justify-items-center">
        <p className="mb-[1vh] text-5xl font-bold">
          Freaquently Asked Question
        </p>
        <p className="mb-[4vh] text-xl text-[#FFFFFF80]">
          Wanna Ask Something?
        </p>
        <div className=" grid grid-cols-2 gap-10">
          <Faqtile question="Haan puch kuch bhi" answer="okokokokokok" />
          <Faqtile question="Haan puch kuch bhi" answer="okokokokokok" />
          <Faqtile question="Haan puch kuch bhi" answer="okokokokokok" />
          <Faqtile question="Haan puch kuch bhi" answer="okokokokokok" />
          <Faqtile question="Haan puch kuch bhi" answer="okokokokokok" />
          <Faqtile question="Haan puch kuch bhi" answer="okokokokokok" />
        </div>
      </div>
    </section>
  )
}
