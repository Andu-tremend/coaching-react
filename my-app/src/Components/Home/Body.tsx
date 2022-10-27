import {useState, useEffect, useContext} from 'react';
import Grid from './Grid';
import List from './List';
import GridToggle from './Grid-toggle';
import Pagination from './Pagination';
import Filters from './Filters';
import Loading from '../Common/Loading';
import {testContext} from '../../Context/Context';
import {useConditionalRender, useApiConsumer} from '../../Functions/index'
import { useSelector } from 'react-redux';


export default function Body () {
    
    const storeState = useSelector((state:any) => state);
    const displayType = storeState.itemsDisplayTypeReducer.display;
    const charName = storeState.filterReducer.name;
    const status = storeState.filterReducer.status;
    const gender = storeState.filterReducer.gender

    const contextVal = useContext(testContext);

    const [URL, setURL] = useState<string>("https://rickandmortyapi.com/api/character")



    interface ApiData {
        data: object | any,
        jsonData: object | any // To fix later
    }
    
    const apiData: ApiData  = useApiConsumer(URL)

    const [rickData, setRickData] = useState<any>([]);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false)
    const [page, setPage] = useState<any>()

    useEffect( () => {
        setLoading(true)
        if (apiData.data != undefined) {
            setLoading(false)
            apiData.data.status !== 200 && setNotFound(true)
             setRickData( apiData.jsonData?.results)
             setPage(apiData.jsonData)
        }

        setURL(`https://rickandmortyapi.com/api/character?&gender=${gender}&status=${status}&name=${charName}&page=1`)
        
   }, [apiData, storeState.filterReducer])
    //Filter based by input 

   
    // Pagination 
    const pagination = storeState.pagination

    useEffect( () => {          
  
        if (pagination.pageDirection) {
            setURL(pagination.pageDirection + `&gender=${gender}&status=${status}&name=${charName}` )
        }
    },[pagination])


    

    return (
        <>
            <main className={`theme__${useConditionalRender(storeState.themeReducer, "morty", "rick")} v-padding-large`}>    
             
               <div className='container'>
                   <h1>{contextVal.bodyText}</h1>
                   <div className='filters__wrapper'>
                       <GridToggle  />
                       <Filters />
                   </div>
                   {loading && <Loading text={notFound ? 'Characters not found' : 'Loading...'} />}
                   { displayType === 'grid' ? 
                   <Grid gridView={rickData}/> :
                   <List listView={rickData} /> }
                    < Pagination page={page} />
               </div>
               
            </main>
        </>
    )
}

