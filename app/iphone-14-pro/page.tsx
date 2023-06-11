import Navbar from "../appleNavbar";
import Overview from "./overview";
import PhotoGallery from "./photoGallery";
import ContentGrid from "./contentGrid";

export default function App() {
    return (
        <div>
            <Navbar background="bg-[#434344]" textColor="text-neutral-100" />
            <Overview />
            <PhotoGallery />
            <ContentGrid />
        </div>
    )
}