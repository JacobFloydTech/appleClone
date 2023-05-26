import Navbar from "../appleNavbar";
import Overview from "./overview";
import PhotoGallery from "./photoGallery";
import ContentGrid from "./contentGrid";

export default function App() {
    return (
        <div>
            <Navbar />
            <Overview />
            <PhotoGallery />
            <ContentGrid />
        </div>
    )
}