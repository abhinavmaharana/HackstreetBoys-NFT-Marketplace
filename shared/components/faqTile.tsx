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
        <label
          className="flex w-[500px] rounded-[10px]
      
      bg-gradient-to-r from-[#3b363680] via-[#b4afaf80] 
      to-[#3b363680] hover:shadow-2xl hover:shadow-[#603b79]"
        >
          <p className="m-auto grid w-fit   px-[20px] py-[15px] text-3xl">
            {question}
          </p>
        </label>
      ) : (
        <label
          className="flex w-[500px]
      
      rounded-[10px]  bg-gradient-to-r from-[#671AE4]
      via-[#B75CFF] to-[#671AE4] 
      hover:shadow-2xl hover:shadow-[#603b79]"
        >
          <p className=" m-auto grid w-fit   px-[20px] py-[15px] text-3xl">
            {answer}
          </p>
        </label>
      )}
    </div>
  )
}
