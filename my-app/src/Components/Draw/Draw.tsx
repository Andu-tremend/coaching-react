import Header from "../Header";
import SidebarNav from '../SidebarNav/SidebarWrapper';
import SidebarItem from '../SidebarNav/SidebarItem'
import { useConditionalRender } from "../../Functions";
import {useSelector} from 'react-redux';




export default function Draw() {
    const storeState = useSelector((state: any) => state)

    return (
        <div>
                <Header />
                <div className="body__container">
                    <SidebarNav />
                    <main className={`theme__${useConditionalRender(storeState.themeReducer, "morty", "rick")} v-padding-large`}>    
                        <div className='container'>
                            <h1>WIP - Will have a canva with draw features</h1>
                            <p>Features:</p>
                            <ul>
                                <li>draw on touch start</li>
                                <li>Change color - input type color</li>
                                <li>Change pointer width with input type interval?? </li>
                                <li>Generate random character as draw chalange</li>
                            </ul>
                        </div>
                    </main>
                </div>
                
        </div>
    )
}    