import SidebarItem from './SidebarItem';
import { useState } from 'react';
import { useConditionalRender } from '../../Functions';
import Draw from '../Draw/Draw'
import {Link} from "react-router-dom";



export default function SidebarNav() {

    const [toggle, setToggle] = useState(false);
    
    const handleToggle = () => {
        setToggle( state => !state)
    }

    const toggled = useConditionalRender(toggle, "200px" , "100px")

    return (
        <div className="sidebar__wrapper">
            <div className="sidebar__container" style={{width: toggled }}>
                <div onClick={handleToggle}  className="sidebar__toggle">
                </div>
                <Link to="/">Characters list</Link>
                <Link to="draw">Draw</Link>
                
            </div>
        </div>
    )
}