import {useState, useEffect, useContext} from 'react';
import Grid from './Grid';
import List from './List';
import GridToggle from './grid-toggle';
import Pagination from './Pagination';
import Filters from './Filters';
import Loading from './loading';
import {testContext} from './Context/Context';
import {useConditionalRender, useFetch} from '../Functions/index'
import { useSelector } from 'react-redux';


export default function Body () {
    
    const storeState = useSelector((state:any) => state);
    const displayType = storeState.itemsDisplayTypeReducer.display;
    const charName = storeState.filterReducer.name;
    const status = storeState.filterReducer.status;
    const gender = storeState.filterReducer.gender

    const contextVal = useContext(testContext);

    const [URL, setURL] = useState(`https://rickandmortyapi.com/api/character?&gender=${gender}&status=${status}&name=${charName}&page=1`)
    const data = useFetch(URL)


    // Filter based by input 

    useEffect ( () => {
        setURL(`https://rickandmortyapi.com/api/character?&gender=${gender}&status=${status}&name=${charName}&page=1`)
    },[ storeState.filterReducer ])


    // Pagination 
    const pagination = storeState.pagination

    useEffect( () => {          
  
        if (pagination.pageDirection) {
            setURL(pagination.pageDirection + `&gender=${gender}&status=${status}&name=${charName}` )
        }
    },[pagination])

    return (
        <main className={`theme__${useConditionalRender(storeState.themeReducer, "morty", "rick")} v-padding-large`}>    
                
                <div className='container'>
                    <h1>{contextVal.bodyText}</h1>
                    <div className='filters__wrapper'>
                        <GridToggle  />
                        <Filters />
                    </div>
                    {data.loading && <Loading text={data.notFound ? 'Characters not found' : 'Loading...'} />}
                    { displayType === 'grid' ? 
                    <Grid gridView={data.rickData}/> :
                    <List listView={data.rickData} /> }
                     < Pagination page={data.page} />
                </div>
                
        </main>
    )
}