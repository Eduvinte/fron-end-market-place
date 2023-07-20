import { createContext, useState } from "react";

export const AuthContextApp = createContext({})

export function ContextProvider({ children }){

    function setEmailGlobal({email}){
        console.log(email)
    }

    function setRegisterGlobal({ nameRegister }){
        console.log(nameRegister)
    }
   

    return (
        <AuthContextApp.Provider value={{ setEmailGlobal, setRegisterGlobal }}>
            {children}
        </AuthContextApp.Provider>
    )
}