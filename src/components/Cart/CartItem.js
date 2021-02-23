export const CartItem = ({ producto, items }) => {
    return (
        <div>
            <div id="left">
                <img src={producto.urlImagen} alt="producto" />
            </div>
            <div id="right">
                <p id="title">{producto.titulo}</p>
                <div>
                    <p>Cantidad: {items}</p>
                </div>
                <p>$ {producto.precio * producto.items}</p>
                
            </div>
        </div>
    );
};