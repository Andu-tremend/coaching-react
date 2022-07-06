
import {useSelector, useDispatch} from 'react-redux';
import store from '../Store/store';
import {toggleAction} from '../Actions/actions'




export default function Header(props) {

    const dispatch = useDispatch();
    
    const toggleValue = useSelector((state) => state)

    function toggler() {
        dispatch(toggleAction())
        
    }




    return (
        <header className={` header__${toggleValue.themeReducer ?  "morty" : "rick"}`} >
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className='logo'>Logo</div>
                    </div>
                    <div className="col-lg-6">
                        <nav>
                            <ul>
                                <li>Placeholder</li>
                                <li>Placeholder</li>
                                <li>Placeholder</li>
                                <li>Placeholder</li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3">
                        <button onClick={toggler} > Toggle { toggleValue.themeReducer ?  " Rick " : "Morty "}Theme</button>
                    </div>
                    
                </div>
                
            </div>

        </header>
    )
}