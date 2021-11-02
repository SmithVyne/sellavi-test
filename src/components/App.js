import { createContext, useEffect, useState } from "react";
import Main from "../pages/Main";
import Nav from "../globals/Nav";
import smoothscroll from 'smoothscroll-polyfill';
import { Route, Switch } from "react-router";
import Authentication from "../pages/Authentication";
import { auth } from "../globals/firebase";
import {onAuthStateChanged} from "firebase/auth"


smoothscroll.polyfill();

export const GlobalContext = createContext();
export const UserContext = createContext();

export default function App() {
    const [cart, updateCart] = useState({});
    const [currentUser, setCurrentUser] = useState();
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => setCurrentUser(user))
        return unsubscribe
    }, [])

    return (
        <UserContext.Provider value={currentUser}>
            <GlobalContext.Provider value={{cart, updateCart}}>
                <Nav />
                <Switch>
                    <Route exact path="/"><Main /></Route>
                    <Route path="/user"><Authentication /></Route>
                </Switch>
            </GlobalContext.Provider >
        </UserContext.Provider>
    )
}