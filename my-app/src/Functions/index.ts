import {useSelector} from 'react-redux';
import {useState, useEffect, useContext} from 'react';


// Just a basic custom hook

export  function useConditionalRender(conditionVal:boolean, ifTrueVal:string, ifFalseVal:string) {
    return conditionVal ? ifTrueVal : ifFalseVal
}


// Hook to fetch data
export function useFetch(URL: string) {
    const [rickData, setRickData] = useState<any>([]);
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false)
    const [page, setPage] = useState<any>()

   

    useEffect( () => {
        const getData = async () => {
            try {
                setLoading(true)
                const response = await fetch(URL)
                const json = await response.json();
                response.status === 200 && setLoading(false);
                response.status !== 200 && setNotFound(true)
                setRickData(json.results);
                setPage(json);
            }

            catch (error) {
                console.log(error)
            }
            
        }
        getData();
    }, [URL]);

    console.log(page)

    return {
        rickData,
        page,
        loading,
        notFound
    } 

    

}



// Hook for draw on canvas