

export default function Grid (props:any) {

    
   
    let gridView = props.gridView.map((item:any) => {
        const rawDate = new Date(item.created);
        
        console.log( rawDate.getDay(), rawDate.getMonth(), rawDate.getFullYear())

        return (
            <div key={item.id} className="homepage-grid__item">
                {item.image && <img src={item.image} alt="item.name" />}
                {item.name &&<div><span>Name:</span> {item.name}</div>}
                {item.created && <div><span>Release date:</span> {item.created}</div> }
            </div>
        )
    
    
    });

    return (
        <div className='homepage-grid'>{gridView}</div>
    )
}

