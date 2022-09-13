export default  class FetchData {
    url: string;
    data: JSON | undefined;
    statusCode: number | undefined;
    responseObj: any;
    statusOk: boolean | undefined;

    constructor(url:string) {
        this.url = url
    }

    async fetchData () {
        try {
            const response = await fetch(this.url);
            const data = await response.json();
            const statusCode = response.status
            this.data = data;
            this.statusCode = statusCode
            this.responseObj = response
        }
        catch (error) {
            this.errorHandle()
        } 
    }

    async handleFetchResponse () {
        await this.fetchData()
        if (this.responseObj.ok) {
            return this.data
        } else {
             throw Error (`Eroare cu status: ${this.statusCode}`)
        }
    }

    get returnStatus() {
        return  this.checkStatus()
    }

    get returnData() {
        return this.handleFetchResponse()
    }

    async checkStatus() {
        await this.fetchData()
        console.log ("this is statuscode", this.statusCode)
    }

    errorHandle() {
        console.log("Ori a picat netu, ori link-ul folosit nu e un API") 
    }

 }


