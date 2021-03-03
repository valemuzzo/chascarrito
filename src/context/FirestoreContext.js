import {getFirestore} from '../Firebase';
import React, { createContext, useContext } from 'react';

export const FirestoreContext = createContext();

export const useFirestoreContext = () => useContext(FirestoreContext);


export const FirestoreProvider = ({ children }) => {

        // conexion a la bd
        const db = getFirestore(); 

        // Traigo datos
        const itemCollProductos = db.collection('productos');// Consulto la collection y la guardo en una constante
        
        //Get Productos
        const getProductos=  itemCollProductos.get();
        
        //Get Producto
        function getProducto(id){
            return itemCollProductos.doc(id).get();
        };

    return (
        <FirestoreContext.Provider value={{getProductos, getProducto, itemCollProductos }}>
            {children}
        </FirestoreContext.Provider>
    )
}



