import { createContext } from "react";

export const ProductContextApp = createContext()

export function ContextProviderProducts({ children }) {

    function addProduct( addProduct ) {
        console.log(addProduct)
    }

    return (
        <ProductContextApp.Provider value={{ addProduct }}>
            {children}
        </ProductContextApp.Provider>
    )
}