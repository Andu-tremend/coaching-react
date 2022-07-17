
export default function List (props:any) {
   
    let listView = props.listView.map((item:any) => {
 
        return (
            <div key={item.id} className="homepage-list__item">
                <div className='image-wrapper'>{item.image && <img src={item.image} alt="item.name" />}</div>
                <div className='content-wrapper'>
                    {item.name &&<div><span>Name:</span> {item.name}</div>}
                    {item.created && <div><span>Release date:</span> {item.created}</div> }
                    {item.gender && <div><span>Gender:</span> {item.gender}</div>}
                    {item.origin && <div><span>Origin:</span> {item.origin.name}</div>}  
                    {item.location && <div><span>Location:</span> {item.location.name}</div>}  
                    {item.species && <div><span>Species:</span> {item.species}</div>}  

                    {/* { <div className='item__episode-list'>
                    Episodes:
                
                        {item.episode.map( (elem:any) => {
                            return (                    
                                <div>{elem}</div>
                                    )
                        })
                        }
                    
                    </div> } */}
                </div>
            </div>
        )
    
    
    });

    return (
        <div className='homepage-list'>{listView}</div>
    )
}


