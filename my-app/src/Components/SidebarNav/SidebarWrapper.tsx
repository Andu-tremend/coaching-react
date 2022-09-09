import { useState } from 'react';
import { useConditionalRender } from '../../Functions';
import Draw from '../Draw/Draw'
import {Link} from "react-router-dom";



export default function SidebarNav() {

    const [toggle, setToggle] = useState(false);
    
    const handleToggle = () => {
        setToggle( state => !state)
    }

    const toggled = useConditionalRender(toggle, "200px" , "70px")

    return (
        <div className="sidebar__wrapper">
            <div className="sidebar__container" style={{width: toggled }}>
                <div onClick={handleToggle}  className={`${useConditionalRender(toggle, "open" , "closed")} sidebar__toggle `} >
                    <img  src={`icon-right.svg` }/>
                </div>
                <Link className='sidebar__link' to="/">
                    <img  src={`icon-list.svg` }/> {useConditionalRender(toggle, "Characters" , "")}
                </Link>
                <Link className='sidebar__link' to="/draw">
                    <img  src={`paintbrush-solid.svg` }/> {useConditionalRender(toggle, "Draw" , "")}
                </Link>
                <Link className='sidebar__link' to="/notes">
                    <img  src={`sticky-note-solid.svg` }/> {useConditionalRender(toggle, "Notes" , "")}
                </Link>
                
            </div>
        </div>
    )
}