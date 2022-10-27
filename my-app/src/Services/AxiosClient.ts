import axios from "axios";

import HttpClient  from './ApiClientsInterface'

export default class AxiosClient implements HttpClient {

  
    request(url: string, headers?: Headers, method?: string, body?: any) {

        const params = {
            method,
            headers, 
            body
        }
        
        const AxiosFetch = axios.get(url, {params})
        .then(results => results)
        .catch(function (error) {
            console.log(error);
        })

        return AxiosFetch
       
    }
}