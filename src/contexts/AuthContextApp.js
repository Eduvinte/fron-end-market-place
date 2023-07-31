import { createContext, useState, useEffect } from "react";

export const AuthContextApp = createContext({})

export function ContextProvider({ children }) {

  const [idUser, setIdUser] = useState('')
  const [token, setToken] = useState('')
  const [productAdd, setProductAdd] = useState(false)


  function infoUserSession({ userInfo }) {
    // Comparte id do usuario globalmente
    localStorage.setItem('uuidUser', userInfo.userId);
    localStorage.setItem("userSession", userInfo.token)
  }

  // Funcion para deslogar
  function logout(){
    localStorage.removeItem('uuidUser')
    localStorage.removeItem('userSession')
    window.location.reload();
  }

  useEffect(() => {
    setIdUser(localStorage.getItem('uuidUser'))
    setToken(localStorage.getItem('userSession'))
  }, [infoUserSession])

// Devolve true si existe o false si no
  const isLloged = !!localStorage.getItem("userSession");

  function setRegisterGlobal({ nameRegister }) {

  }


  return (
    <AuthContextApp.Provider value={{ infoUserSession, setRegisterGlobal, logout, isLloged, idUser, token, setProductAdd, productAdd}}>
      {children}
    </AuthContextApp.Provider>
  )
}