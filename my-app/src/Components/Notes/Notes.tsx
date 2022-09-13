import Header from "../Header";
import SidebarNav from '../SidebarNav/SidebarWrapper';
import { useConditionalRender } from "../../Functions";
import {useSelector} from 'react-redux';
import { useEffect, useState } from "react";
import FetchData from "../../Services";



export default function Draw() {
    const [state, setState] = useState({})

    useEffect( () => {
        const testing = async () => {
            const serviceClass = new FetchData("https://rickandmortyapi.com/api/location")
            const data = await serviceClass.returnData
            setState(()=> data)
        }
        
        testing()
    }, [])

    const storeState = useSelector((state: any) => state)
    console.log(state)
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


