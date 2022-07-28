import {useSelector, useDispatch} from 'react-redux';
import {toggleAction, actionCreatorTest} from '../Actions/actions';
import {useState, useEffect, useCallback} from 'react';
import Grid from './Grid';
import List from './List';
import GridToggle from './grid-toggle';
import Pagination from './Pagination';
import store from '../Store/store';


interface PropsTitle {
    title: string;
}

export default function Body (props: PropsTitle) {

    const dispatch = useDispatch();
    const storeState = useSelector((state:any) => state);
    const displayType = storeState.itemsDisplayTypeReducer.display
    const [rickData, setRickData] = useState<any>([]);

    const [URL, setURL] = useState('https://rickandmortyapi.com/api/character?page=1')
    const [page, setPage] = useState<any>()

    useEffect( () => {
        const getData = async () => {
            const response = await fetch(URL)
            const json = await response.json();
            setRickData(json.results);
            setPage(json);
        }
        getData();
       

    }, [URL]);

    const pagination = storeState.pagination
    
    useEffect( () => {            
        if (pagination.pageDirection) {
            setURL(pagination.pageDirection)
        }

        
    },[pagination])

       
 
    return (
        <main className={`theme__${storeState.themeReducer ? 'morty' : 'rick'} v-padding-large`}>
                <div className='container'>
                    <h1>{props.title}</h1>
                    <GridToggle  />
                    < Pagination page={page} />
                    { displayType === 'grid' ? 
                    <Grid gridView={rickData}/> :
                    <List listView={rickData} /> }
                    {/* <Pagination  /> */}
                    
                </div>
                
        </main>

    )
}

