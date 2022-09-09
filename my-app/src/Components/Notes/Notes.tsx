import Header from "../Header";
import SidebarNav from '../SidebarNav/SidebarWrapper';
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
                            <div style={{backgroundColor: "white", padding: "1rem"}} >
                                <h1> Just saving some thoughts </h1>
                                <ul>
                                    <li>
                                        Use OOP to refactor fetching
                                        <ul>
                                            <li>Use private and abstract class </li>
                                        </ul>
                                    </li>
                                    <li>
                                        For Router nav {'->'} fetch individual characters and create pages based on them
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </main>
                </div>
        </div>
    )
}    


