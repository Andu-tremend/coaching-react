import { useCallback, useEffect, useMemo } from "react";

export default function List (props:any) {
   

    const listView = props.listView?.map((item:any) => {
            return (
                <div key={item.id} className="homepage-list__item">
                    <div className='image-wrapper'>{item.image && <img src={item.image} alt="item.name" />}</div>
                    <div className='content-wrapper'>
                        {item.name &&<div><span>Name:</span> {item.name}</div>}
                        {item.created && <div><span>Release date:</span> {new Date(item.created).toLocaleDateString()}</div> }
                        {item.gender && <div><span>Gender:</span> {item.gender}</div>}
                        {item.origin && <div><span>Origin:</span> {item.origin.name}</div>}  
                        {item.location && <div><span>Location:</span> {item.location.name}</div>}  
                        {item.species && <div><span>Species:</span> {item.species}</div>}  
                        {item.status && <div><span>Status: </span>{item.status}</div> }
                    </div>
                </div>
            )


    })

    const pepe = useMemo( () => listView, [props.listView])
    
    return (
        <div className='homepage-list'>{pepe}</div>
    )
}


