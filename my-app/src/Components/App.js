import {useState, useEffect} from 'react';
import Header from './Header'
import Body from './Body';

export default function App(){

    const [data, setData] = useState({});

  
    const options = {
        method: 'GET',
    }
        
        useEffect(  () => {

            fetch('https://rickandmortyapi.com/api/episode', options)
            .then(response => response.json())
            .then(response => setData(response))   
            .catch(error => console.error(error))

           
    }, []);

    // console.log(data.results)

    return (
        <>
            <Header />
            <Body title="Test counter for redux learning" />
        </>
    )
}