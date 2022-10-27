import Header from "../../Header/Header";
import SidebarNav from "../../SidebarNav/SidebarWrapper";
import { useConditionalRender } from "../../../Functions";
import { useSelector } from 'react-redux';
import List from "../List";
import { useState, useEffect } from "react";
import { useApiConsumer } from "../../../Functions";
import { useLocation } from "react-router-dom";


interface ApiData {
    data:  Response | object, 
    jsonData: ApiResponseData 
 }

 interface ApiResponseData {
     name?:  string,
     created?: string,
     episode?: Array<string>,
     image?: string,
     origin?: {
         name?: string,
         url?: string
     },
     location?: {
         name?: string,
         url?: string
     }
 }

export default function CharacterPage (props: any) {

    const storeState = useSelector((state:any) => state);
    const location = useLocation()
    const [character, setCharacter] = useState([{}])

    const apiData: ApiData  = useApiConsumer("https://rickandmortyapi.com/api", `${location.state}`)
    useEffect( () => {
        if (apiData.jsonData !== undefined) {
            setCharacter( ()=> {
                return [ apiData.jsonData];
            })   
        }
           
   }, [apiData.jsonData, location.state])

    return (
        <div>
        <Header />
        <div className="body__container">
            <SidebarNav />
            
            <main className={`theme__${useConditionalRender(storeState.themeReducer, "morty", "rick")} v-padding-large`}> 
                <div className='container'>
                    <h1> <strong>{apiData.jsonData?.name}</strong></h1>
                    <h4 style={{marginBottom: "4rem"}}>Reused List component beacause I was lazy for dynamic router</h4>
                    <List  listView={character} />
                </div>
            </main>
        </div>
</div>
    )
}