
import {useSelector, useDispatch} from 'react-redux';
import {toggleAction} from '../Actions/actions'



export default function Header(props: any) {

    const dispatch = useDispatch();

    const toggleValue = useSelector((state: any) => state);


    function toggler() {
        dispatch(toggleAction())
        
    }

    return (
        <header className={` header__${toggleValue.themeReducer ?  "morty" : "rick"}`} >
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 header__logo-wrapper">
                        <div className='logo'>
                            <img src='logo.png' width='100px' alt='logo'/>
                        </div>
                    </div>
                    <div className="col-lg-6 header__menu-wrapper">
                        <h1 style={{color: '#fff', margin: 'auto'}}>Rick and morty WIP APP</h1>
                        {/* <nav>
                            <ul>
                                <li>Placeholder</li>
                                <li>Placeholder</li>
                                <li>Placeholder</li>
                                <li>Placeholder</li>
                            </ul>
                        </nav> */}
                    </div>
                    <div className="col-lg-3 theme-toggle__wrapper">
                        <div className='theme-toggle__slider'>
                            <img className={`toggled-${toggleValue.themeReducer ?  "morty" : "rick"}`} onClick={toggler} width="48px" src={`icon-${toggleValue.themeReducer ?  "morty" : "rick"}.png`} alt="theme-toggler"></img>
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>

        </header>
    )
}