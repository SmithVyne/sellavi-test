import { createContext, useState } from "react";
import Main from "./Main";
import Nav from "./Nav";
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

// const firebaseConfig = {
//     apiKey: "AIzaSyA5vCoDuVOnqRy_1riH1I_W_6-G-B97pfU",
//     authDomain: "sellavi-9e675.firebaseapp.com",
//     projectId: "sellavi-9e675",
//     storageBucket: "sellavi-9e675.appspot.com",
//     messagingSenderId: "159229693979",
//     appId: "1:159229693979:web:ba4398a3f70d05ca7d68be"
//   };

export const GlobalContext = createContext();

export default function App() {
    // const [cart, updateCart] = useState({});
    // const [favourites, setFavourites] = useState({});

    return (
        <GlobalContext.Provider value={{cart, updateCart}}>
            <Nav />
            <Main />
        </GlobalContext.Provider >
    )
}