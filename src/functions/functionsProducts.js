
import axios from 'axios';

async function deleteProduct(products_id){
    try {
        await axios.delete(`https://back-end-market-place-production.up.railway.app/deleteProduct/${products_id}`)
    } catch (error) {
        console.error('Error al eliminar el producto', error)
    }
}



export  {deleteProduct}