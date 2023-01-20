import { Flex, Spinner } from "@chakra-ui/react";
import { useState,createContext,useContext, useEffect } from "react";
import {fetchMe} from "../api"
 const AuthContext =createContext();

 const AuthProvider = ({children}) =>{ 
    const [user, setUser] =useState(null);
    const [loggedIn,setLoggedIn] =useState(false);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
       (async ( ) =>{
            const getUser=await fetchMe();
            console.log("gET",getUser)
            if(getUser.username){
                setLoggedIn(true)
                setUser(getUser)
            }
            
            setLoading(false)
        
       })()
    },[]);

    const login= async(data)=>{

        setLoggedIn(true);

        console.log(data)
        /*setUser(data);*/
        localStorage.setItem('token',data.token)
        const users =await  fetchMe()
        console.log(users)
        setUser(users)
    };

    const logout= ()=>{
        setLoggedIn(false)
        setUser(null)
        localStorage.removeItem('token')
    }

    const values = {
        loggedIn,
        user,
        login,
        logout
    };
    
    if(loading){
        return(
            <Flex justifyContent="center" alignItems="center" height="100vh">
                <Spinner thickness="4px" speed="0.65" emptyColor="gray.200" size="xl"  color="red"></Spinner>
            </Flex>
        )
    }

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>

 }
const useAuth = () => useContext(AuthContext);

export{
    AuthProvider,
    useAuth
}
