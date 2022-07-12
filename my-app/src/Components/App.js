import Header from './Header'
import Body from './Body';
import Login from './login';


export default function App(){
let logged = false;

    // Puteam sa am 2 componente si sa le afisez cu turnary, dar momentan doar am testez
    // iar dupa o sa uit sa modific 
    if (logged) {
        return (
            <>
            <Header />
            <Body title="Rick and morty learning app" />
            </>
        )
    }
    else {
        return (
            <>
                <Login />
            </>
        )
    }


    



}