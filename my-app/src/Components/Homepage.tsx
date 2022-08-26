import Header from "./Header";
import Body from "./Body";
import {testContext, appNamingData} from '../Context/Context';

export default function LoggedIn() {


    return (
        <div>
            <testContext.Provider value={appNamingData}>
                <Header />
                <Body /> 
            </testContext.Provider>
        </div>
    )
}    