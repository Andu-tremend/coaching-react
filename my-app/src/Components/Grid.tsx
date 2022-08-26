import {useSelector} from 'react-redux';

interface PropsInter {
    gridView: Array<string>
}


export default function Grid (props:PropsInter) {

    const storeState = useSelector( (state:any) =>  state )
    const theme = storeState.themeReducer;
    const gridView = props.gridView?.map((item:any) => {  
        return (
            <div key={item.id} className={`${theme ? "morty" : "rick"   } homepage-grid__item `} >
                {item.image && <div className={`image-wrapper ${item.status}`}><img src={item.image} alt={item.name} /></div>}
                {item.name &&<div><span>Name:</span> {item.name}</div>}
                {item.created && <div><span>Release date:</span> {new Date(item.created).toLocaleDateString()}</div> }
                {item.status && <div ><span>Status: </span>{item.status}</div> }
                
            </div>
        )
    
    });

    return (
        <div className='homepage-grid'>{gridView}</div>
    )
}

