import Header from "../Header";
import Body from "../Body";
import {testContext, appNamingData} from '../../Context/Context';
import SidebarNav from '../SidebarNav/SidebarWrapper';

export default function LoggedIn() {


    return (
        <div>
            <testContext.Provider value={appNamingData}>
                <Header />
                <div className="body__container">
                    <SidebarNav />
                    <Body /> 
                </div>
            </testContext.Provider>
        </div>
    )
}    