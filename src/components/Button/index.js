import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { BsFillHeartFill } from "react-icons/bs";
export function ButtonComponent(props) {
    return (
        <>
            <Button variant='warning' type='submit' className={props.className}>{props.value}</Button>
        </>
    )
}

export function ButtonFavorit(props) {

    const productId = props.product.id;

    const [isExiste, setIsExiste] = useState(false);

      useEffect(() => {
        // Cuando el estado 'isExiste' cambia, almacenarlo en el localStorage
        localStorage.setItem(`favorit_${productId}`, isExiste.toString());
      }, [isExiste, productId]);

        function handleFavorit(product) {
        
        // Obtener la lista actual de productos favoritos del localStorage
        const favoritProducts = JSON.parse(localStorage.getItem('favoritProducts')) || [];

        // Verificar si el producto ya está en la lista (para evitar duplicados)
        const isProductFavorites = favoritProducts.some((favProduct) => favProduct.id === product.id);

        if (!isProductFavorites) {
            favoritProducts.push(product);
            // Guardar la lista actualizada de productos favoritos en localStorage
            localStorage.setItem('favoritProducts', JSON.stringify(favoritProducts));
            setIsExiste(true)
        }
    }

    

    return (
        <>
            <BsFillHeartFill
                onClick={() => handleFavorit(props.product)}
                style={{ 
                    fontSize: '24px', marginBottom: '25px',
                    color: isExiste ? 'red' : 'gray',
                    position: 'relative',
                    top: '-200px',
                    left: '80px'
                }}

            />
        </>
    )
}