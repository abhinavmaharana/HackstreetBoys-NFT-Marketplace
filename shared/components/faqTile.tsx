import { useState } from 'react'

interface Props {
  question: string
  answer: string
}

export default function Faqtile({ question, answer }: Props) {
  const [faq, setFaq] = useState(true)
  return (
    <div
      className="mb-[20px]"
      onClick={() => {
        setFaq(!faq)
      }}
    >
      {faq ? (
        <div>
          <label className="flex w-[500px] rounded-[10px] text-left text-[#ffffff50] hover:font-bold hover:text-[#ffffff]">
            <p className=" grid  py-[15px] text-left text-2xl  ">{question}</p>
            <br />
          </label>
          <hr className="w-[500px]" />
        </div>
      ) : (
        <div>
          <label className="flex w-[500px] rounded-[10px] ">
            <p className="  grid  py-[15px] text-2xl">{answer}</p>
          </label>
          <hr className="w-[500px]" />
        </div>
      )}
    </div>
  )
}
