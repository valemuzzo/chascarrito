<img src="http://chascarrito.com.ar/img/logo-chascarrito.png" />

# Chascarrito

Proyecto de e-commerce realizado en React con Firebase (Firestore) como base de datos.

# Temática

Se trata de una tienda virtual de artículos de chascos y bromas con carrito de compras (carrito de cascos).

# Autor

Valeria Muzzo

# Demo

Puedes ver el demo en: https://chascarrito.netlify.app/

# Funcionalidad

Sitio de una sola pagina en la que se van mostrando diferentes componentes segun la funcionalidad:

- Navegacion intuitiva
- Slider con promoción de productos: los productos se enlazan directamente con la colección productos de la base de datos, mostrando su imagen, título y descripción (al hacer clic lleva a la pagina del producto)
- Listado de productos en portada
- Cada card de producto posee una visualización rápida (botón Vista Rápida que abre un pop-up a detalle de producto sin abandonar el listado inicial) y otra que abre el detalle de producto al clickear el título o la imagen (pagina específica del producto).
- Añadir al carrito: puedes añadir varios productos diferentes a la vez desde el listado inicial o puedes tambien añadir desde la página de cada producto. A medida que se añaden se puede ver en el ícono del carrito (borde superior derecho), la cantidad añadida.
- Checkout: al finalizar la compra, si te arrepientes puedes quitar algun producto de la lista de tu carrito. Luego completas los datos de un breve formulario y obtienes el ID de la compra, que se guarda directamente en una colección de órdenes de Firebase.
- Footer

# Firebase / Firestore

Se crearon 3 colecciones de datos iniciales:

- Productos
- Categorías (de productos)
- Ordenes

# Intalación

- Descarga el proyecto o clónalo
- npm install (en consola de Visual Code) para instalar las dependencias
- npm start para visualizar en el browser
- puedes incluir tu propia base de datos creada en Firebase modificando los datos de las credenciales en la carpeta Firebase.

# Librerías adicionales

- React-Bootstrap para uso de componentes específicos y estilos
- React-Hook-Form para validacion de formularios
- React-Router-Dom para navegabilidad

# Imagenes

Se utilizaron enlaces a imágenes de sitios existentes con la misma temática a los cuales se atribuyen los créditos.
