# Jersey Universe — aplicación instalable (PWA)

Esta versión conserva las funciones y el diseño del sitio entregado: inicio, catálogo, búsqueda, filtros, fichas de producto, selección de tallas, carrito, cuenta, Acerca de nosotros y Contactos. Se añadieron el registro del service worker y el manejo de rutas relativas para evitar el error de sitio no encontrado al abrir la aplicación instalada.

## Importante: conservar tus carpetas de imágenes e iconos

Copia tus carpetas `img` e `icons` originales dentro de esta carpeta sin cambiar los nombres de los archivos (`./img/psg-local.png`, `./icons/icon-192.png`, etc.).

## Publicar y probar

1. Sube todos los archivos junto con tus carpetas `img` e `icons` a tu repositorio o hosting con HTTPS (Cloudflare Pages o GitHub Pages).
2. No abras `index.html` directamente con doble clic (`file://`): abre la URL publicada con `https://` desde tu navegador.
3. Si ya habías instalado una versión anterior que marcaba error, desinstálala de tu teléfono, recarga la página publicada para que se registre `jersey-universe-v3` y vuelve a instalarla.
