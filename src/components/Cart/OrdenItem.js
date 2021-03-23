import './cart.css';

export const OrdenItem = ({ producto, items }) => {
    
    return (
        
            
                        <tr key={producto.id} >
                            
                            <td  className="borde">{producto.titulo}</td>
                            <td style={{textAlign:'center'}} className="borde">{items}</td>
                            <td style={{textAlign:'center'}} className="borde">${producto.precio}</td>
                            <td style={{textAlign:'center'}} className="borde"><b>${producto.precio * items}</b></td>
                            
                        </tr>
                    
    );
};