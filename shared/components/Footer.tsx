export default function Footer() {
  return (
    <div className="grid grid-rows-1 gap-x-48 px-24 py-14 md:grid-cols-4">
      <div className="space-y-4 text-2xl text-white">
        <h1 className="text-2xl font-bold">
          Psycho<span className="text-[#9a0df8]">Art</span>
        </h1>
        <p className="text-sm">Made the Website with love</p>
      </div>
      <div className="space-y-4 text-xs text-white">
        <h5 className="font-bold">About</h5>
        <p>Product</p>
        <p>Resource</p>
        <p>Term & Condition</p>
        <p>FAQ</p>
      </div>
      <div className="space-y-4 text-xs text-white">
        <h5 className="font-bold">Company</h5>
        <p>Our Team</p>
        <p>Partner With Us</p>
        <p>Privacy & Policy</p>
        <p>Features</p>
      </div>
      <div className="space-y-4 text-xs text-white">
        <h5 className="font-bold">Contact</h5>
        <p>+91 887567645</p>
        <p>Newsroom</p>
        <p>support@gmail.com</p>
      </div>
    </div>
  )
}
