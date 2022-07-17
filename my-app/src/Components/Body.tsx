import {useSelector, useDispatch} from 'react-redux';
import {toggleAction} from '../Actions/actions';
import {useState, useEffect} from 'react';
import Grid from './Grid';
import List from './List';
import GridToggle from './grid-toggle';


export default function Body (props: any) {

    const dispatch = useDispatch();
    const storeState = useSelector((state:any) => state);
    const displayType = storeState.itemsDisplayTypeReducer.display
    const [rickData, setRickData] = useState<any>([]);
    const [URL, setURL] = useState('https://rickandmortyapi.com/api/character')

    useEffect( () => {
    
        const getData = async () => {
            const response = await fetch(URL)
            let json = await response.json();
            setRickData(json.results);
            // console.log(json.results)
        }
        getData();
        

    }, [URL]);

 
    return (
        <main className={`theme__${storeState.themeReducer ? 'morty' : 'rick'} v-padding-large`}>
                <div className='container'>
                    <h1>{props.title}</h1>
                    <GridToggle  />
                    { displayType === 'grid' ? <Grid gridView={rickData}/> :
                    <List listView={rickData} /> }
                    
                </div>
        </main>

    )
}