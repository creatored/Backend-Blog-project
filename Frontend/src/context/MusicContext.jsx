import { useEffect, useState } from "react";

export const MusicContext = createContent();

export const MusicProvider = ({children})=> {
        const localStorageData = localStorage.getItem("user");
        const [loggedUser, setLoggedUser] = useState('')

    useEffect(() => {
        if(localStorageData){
            setLoggedUser(JSON.parse(localStorageData))
        }
    },[]);
    return(
        <MusicContext.Provider value = {{loggedUser, setLoggedUser, number}}>{children}</MusicContext.Provider>
    )
}   
