import { createContext, useCallback, useEffect, useState } from "react";
import Main from "../pages/Main";
import Nav from "../globals/Nav";
import smoothscroll from 'smoothscroll-polyfill';
import { Route, Switch } from "react-router";
import Authentication from "../pages/Authentication";
import { auth, firestore } from "../globals/firebase";
import {onAuthStateChanged} from "firebase/auth"
import Dashboard from "../pages/Dashboard";
import { doc, getDoc } from "@firebase/firestore";
import Cart from "../pages/Cart";

smoothscroll.polyfill();


export const GlobalContext = createContext();
export const UserContext = createContext();

export default function App() {
    const [cart, updateCart] = useState({});
    const [currentUser, setCurrentUser] = useState();
    const [userType, setUserType] = useState("")
    
    const loginFunc = useCallback(
        (user) => {
            const docRef = doc(firestore, 'users/'+user.uid);
            getDoc(docRef).then(snapshot => {
                if(snapshot.exists() && snapshot.data().type){
                    setUserType(snapshot.data().type)
                } 
            })
        },
        []);

    useEffect(() => {
        currentUser && loginFunc(currentUser)
    }, [currentUser, loginFunc])
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => setCurrentUser(user))
        return unsubscribe
    }, [])

    // console.log(currentUser)

    return (
        <UserContext.Provider value={currentUser}>
            <GlobalContext.Provider value={{cart, updateCart}}>
                <Nav />
                <Switch>
                    <Route exact path="/"><Main /></Route>
                    <Route path="/user">
                        { currentUser && userType ? <Dashboard userType={userType} /> : <Authentication />}
                    </Route>
                    <Route path="/cart"><Cart /></Route>
                </Switch>
            </GlobalContext.Provider >
        </UserContext.Provider>
    )
}