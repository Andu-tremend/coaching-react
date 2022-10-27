import Header from "../Header/Header";
import SidebarNav from '../SidebarNav/SidebarWrapper';
import Canva from "./CanvaComp";

export default function Draw() {
   
    return (
        <div>
                <Header />
                <div className="body__container">
                    <SidebarNav />
                    <Canva />
                </div>
        </div>
    )
}    


