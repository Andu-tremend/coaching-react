import {useSelector, useDispatch} from 'react-redux';
import {toggleAction} from '../Actions/actions';
import {useState, useEffect} from 'react';




export default function Body (props) {

    const dispatch = useDispatch();
    const toggleValue = useSelector((state) => state);

    const [rickData, setRickData] = useState([]);
    const [URL, setURL] = useState('https://rickandmortyapi.com/api/character')

    

    useEffect( () => {
      
        const getData = async () => {
            const response = await fetch(URL)
            let json = await response.json();
            setRickData(json.results)
        }
        getData();
        

    }, [URL]);

    


    function handleSelect(e) {
        // setURL(e.target.value)
        
    }
    
    let episodes = rickData.map(item => {
        if (item) {
            
            return (
                <div key={item.id} className="homepage-grid__item">
                    {item.image && <img src={item.image} alt="item.name" />}
                    {item.name &&<div>{item.name}</div>}
                    {item.created && <div>Release date{item.created}</div> }
                    <div className='item__episode-list'>
                    Episodes:
                   {item.episode && <select onChange={handleSelect}>
                        {item.episode.map( elem => {
                            return (                    
                                <option value={elem}>{elem}</option>  
                                    )
                        })
                        }
                    </select> }
                    </div>
                </div>
            )
        } else 
        {
            return (
                <div>Loading...</div>
            )
        }
        
    });

   
   
    
    return (
        <main className={`theme__${toggleValue.themeReducer ? 'morty' : 'rick'} v-padding-large`}>
                <div className='container'>
                    <h1>{props.title}</h1>
                    <div className='homepage-grid'>{episodes}</div>
                    
                </div>
        </main>

    )
}