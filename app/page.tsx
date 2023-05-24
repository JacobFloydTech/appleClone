import ContentGrid from "./appleContentGrid"
import Navbar from "./appleNavbar"
import Phone from "./appleiPhone"

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <Phone/>
      <ContentGrid/>
    </div>
  )
}
