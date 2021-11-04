import { createContext, useCallback, useEffect, useState } from "react";
import Main from "../pages/Main";
import Nav from "../globals/Nav";
import { Route, Switch } from "react-router";
import Authentication from "../pages/Authentication";
import { auth, firestore } from "../globals/firebase";
import {onAuthStateChanged} from "firebase/auth"
import Dashboard from "../pages/Dashboard";
import { collection, doc, getDoc, onSnapshot, query } from "@firebase/firestore";
import Cart from "../pages/Cart";


export const GlobalContext = createContext();
export const UserContext = createContext();

export default function App() {
    const [cart, updateCart] = useState({});
    const [currentUser, setCurrentUser] = useState();
    const [userType, setUserType] = useState("");
    const [products, setProducts] = useState([]);
    
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
        const unsubscribeAuth = onAuthStateChanged(auth, user => setCurrentUser(user));
        
        const productsQuery = query(collection(firestore, "products"))
        const unsubscribeProducts = onSnapshot(productsQuery, snapshot => {
            setProducts(snapshot.docs.map(snap => ({...snap.data(), id:snap.id})))
        })
        
        return () => {
            unsubscribeAuth();
            unsubscribeProducts();
        }
    }, [])

    return (
        <UserContext.Provider value={currentUser}>
            <GlobalContext.Provider value={{cart, updateCart, products}}>
                <Nav />
                <Switch>
                    <Route exact path="/" render={() => <Main />} />
                    <Route path="/user">
                        { currentUser && userType ? <Dashboard userType={userType} /> : <Authentication />}
                    </Route>
                    <Route path="/cart" render={() => <Cart />} />
                </Switch>
            </GlobalContext.Provider >
        </UserContext.Provider>
    )
}