
import HttpClient from "../Services/ApiClientsInterface"


export default abstract class AbstractRespository<T, P> {
    
    protected baseUrl: string = ""
    protected apiClient: HttpClient

    get( path?:string, queryParams?: {key: string, value: any}[] ) {

        const fetchUrl = this.buildQuery( path, queryParams)
        return this.apiClient.request(fetchUrl)

    }

    update( id: string, body: T, url?:string) {

    }
    delete(id: string, url?: string) {

    }
    create(body: T, url?:string) {

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
    abstract get status404():string

    get status500():string {
        return "This is a 500 error. Status code"
    }

    private handleError(error) {
        const code = error.statusCode
        switch(code) {
            case 400: 
                return this.status400
            case 404:
                return this.status404
            case 403:
                return this.status403
            case 401:
                return this.status401
            case 500:
                return this.status500
        }
    }

     private buildQueryParams( queryParams?: {key: string, value: any}[]) { // to make private
        
        if (!queryParams ) {
            return ""
        }

        const queryVal = queryParams.map(({key, value}) => {
            return `${key}=${value}`
        })
        return `?${queryVal.join("&")}`
    }

    private buildUrl (path?: string) {  // to make private
        if (!path) {
            return this.baseUrl
        }

        return `${this.baseUrl}/${path}` 

    }

    private buildQuery( url:string, queryParams: {key: string, value: any}[] ) {
        const query = this.buildQueryParams(queryParams)
        const queryUrl = this.buildUrl(url)
       return queryUrl + query
    }
 }


