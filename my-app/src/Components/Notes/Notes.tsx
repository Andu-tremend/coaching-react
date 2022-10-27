import Header from "../Header/Header";
import SidebarNav from '../SidebarNav/SidebarWrapper';
import { useConditionalRender } from "../../Functions";
import {useSelector} from 'react-redux';
import { useEffect, useState } from "react";
import AbstractRespository from "../../Repository";

import AxiosClient from "../../Services/AxiosClient";
import FetchClient from "../../Services/FetchClient";

export default function Draw() {
    const [stateAxios, setStateAxios] = useState<any>()
    const [stateFetch, setStateFetch] = useState<any>()
    const storeState = useSelector((state: any) => state)
    class RickRepo extends AbstractRespository<string, any> {

        constructor(client: any, url?:string ) {
            super();
            this.baseUrl = url
            this.apiClient = client
        }
         get status400():string {
            return "Not implemented"
         }
         get status401():string {
            return "Not implemented"
         }
         get status403():string {
            return "Not implemented"
         }
         get status404():string{
            return "Not implemented"
         }
         
    }

    const axiosClient = new AxiosClient()
    const fetchClient = new FetchClient()

    const repoAxios = new RickRepo(axiosClient, "https://rickandmortyapi.com/api")
    const repoFetch = new RickRepo(fetchClient, "https://jsonplaceholder.typicode.com/")


    const queryParam = [
        {
            key: "name",
            value: "morty"
        },
        {
            key: "name",
            value: "rick"
        }
    ]

    useEffect ( () => {
        const axiosConsume = repoAxios.get("character" , queryParam)
        axiosConsume.then(res => setStateAxios(res))
        
        const fetchConsume = repoFetch.get()
        fetchConsume.then( res => {setStateFetch(res)})
        
    },[])
    console.log(stateFetch)
 
    return (
        <div>
                <Header />
                <div className="body__container">
                    <SidebarNav />
                    <main className={`theme__${useConditionalRender(storeState.themeReducer, "morty", "rick")} v-padding-large`}>    
                        <div className='container'>
                            <div style={{backgroundColor: "white", padding: "1rem"}} >
                                <h1> Just saving some thoughts </h1>
                                <ol>
                                    <li>
                                        <s>Create: un ApiClient care sa iti faca fetch-urile</s>
                                    </li>
                                    <li>
                                        <s>For Router nav {'->'} fetch individual characters and create pages based on them</s>
                                    </li>
                                    <li>Fix pagination to use Fetch Client on hp</li>
                                    <li><s> Create components for Character single page</s></li>
                                </ol>
                            </div>
                        </div>
                    </main>
                </div>
        </div>
    )
}    


