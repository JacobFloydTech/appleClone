import ContentGrid from "./appleContentGrid"
import Navbar from "./appleNavbar"
import Phone from "./appleiPhone"

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar background="bg-[#434344]" textColor="text-neutral-100" />
      <Phone />
      <ContentGrid />
    </div>
  )
}
