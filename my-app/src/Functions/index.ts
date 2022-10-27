import {useSelector} from 'react-redux';
import {useState, useEffect, useContext} from 'react';


import AbstractRespository from '../Repository';
import FetchClient from '../Services/FetchClient';

// Just a basic custom hook

export  function useConditionalRender(conditionVal:boolean, ifTrueVal:string, ifFalseVal:string) {
    return conditionVal ? ifTrueVal : ifFalseVal
}

class Repository extends AbstractRespository<string, any> {

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

// Simplier hook for fetch

export function useApiConsumer (url:string, path?:string, query?: {key: string, value: any}[]) {
    const [data, setData] = useState<object>()
    const [jsonData, setJsonData] = useState<object>()
    const fetchClient = new FetchClient()
    const repoFetch = new Repository(fetchClient, url)
    useEffect( () => {
        const fetchConsume = repoFetch.get( path, query )
                fetchConsume
                .then( (res) => {setData(res); return res.json()})
                .then( (json) => setJsonData(json));
    }, [url])
    return {data, jsonData}
}