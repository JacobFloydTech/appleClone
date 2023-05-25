import Navbar from "../appleNavbar";
import Overview from "./overview";
import PhotoGallery from "./photoGallery";

export default function App() {
    return (
        <div>
            <Navbar />
            <Overview />
            <PhotoGallery />
        </div>
    )
}