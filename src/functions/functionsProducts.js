
import axios from 'axios';

async function deleteProduct(products_id){
    try {
        await axios.delete(`http://localhost:3002/deleteProduct/${products_id}`)
    } catch (error) {
        console.error('Error al eliminar el producto', error)
    }
}



export  {deleteProduct}