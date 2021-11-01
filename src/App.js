import { createContext, useState } from "react";
import Main from "./Main";
import Nav from "./Nav";
import smoothscroll from 'smoothscroll-polyfill';
import { Route, Switch } from "react-router";
import Authentication from "./pages/Authentication";
smoothscroll.polyfill();


export const GlobalContext = createContext();

export default function App() {
    const [cart, updateCart] = useState({});
    // const [favourites, setFavourites] = useState({});

    return (
        <GlobalContext.Provider value={{cart, updateCart}}>
            <Nav />
            <Switch>
                <Route exact path="/"><Main /></Route>
                <Route path="/user"><Authentication /></Route>
            </Switch>
        </GlobalContext.Provider >
    )
}