import HttpClient  from './ApiClientsInterface'


export default class FetchClient implements HttpClient{
   
    request( url: string, headers?: Headers, method?: string, body?: any) {
        
        return fetch(url, {headers, method, body })
        .then(data => data)
    }
}