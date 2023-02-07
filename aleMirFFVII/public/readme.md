# Alejandro Miralles Ruiz
## Proyecto final: página web propia
### 2nDAW

Bienvenido/Bienvenida a mi sitio web. Este documento es una guía para familiarizarte con todo lo que debas saber del sitio web. El documento "tecnicalReadme.md" también describe la página web, pero a un nivel mucho más técnico, explicando 3 capas: el diseño de la página web, su comportamiento en el servidor y en el navegador.
Este documento se ha dividido en: "concepto", "páginas" y "estructura interna".


# Concepto

Este sitio web es una wiki del famoso juego Final Fantasy VII. Es de un tipo de páginas que se dedican a reunir mucha información de un tema, en este caso del juego nombrado, en un único lugar. El ejemplo de Wiki más popular es Wikipedia.



# Páginas
El sitio web se divide en 2 capas: la capa de usuario promedio y la capa de admintración. El usuario promedio sólo tiene acceso a la capa de usuario promedio, mientras que los administradores de la página, sus dueños, pueden acceder a la capa de administración. 
La capa de usuario está compuesta por: "/", "/informacionJuego", "/monstruos", "/monstruos/soldadoRaso", "/monstruos/joker", "/monstruos/ladron", "/monstruos/serpienteKalm". 
    . "/": Es la página de inicio. Desde ahí se puede llegar a "/informacionJuego" y "/monstruos". Desde todas las página del sitio web se pueden acceder a aquí clickando en la imagen del header. 

    . "/informacionJuego": Contiene toda la información más importantes del juego. Historia, contexto del juego, etc.

    . "/monstruos": Página que enlaza a todas las páginas de monstruos. Contiene algunos botones para mostrar únicamente las páginas de los monstruos de la categoría seleccionada.

    . "/monstruos/[unMonstruo]": Página de monstruo. Es una página que recopila toda la información de X monstruo. Suele contener la información de qué clase de monstruo, su localización en el juego y una tabla de sus stats según el nivel que tengan.

A la capa de admin no se puede acceder desde la capa de usuario promedio. Para acceder a ellas hay que escribir la ruta directamente en la URL. Está compuesta por: "/admin/login", "/admin/register", "/admin/logout" y "/admin/manageFeedback".
    . "/admin/login" y "/admin/register": Páginas para registrarse en la página. A diferencia del resto de páginas de esta capa, en ellas puede acceder cualquier usuario. 

    . "/admin/logout": Página para cerrar la sesión. A diferencia de "/admin/login" y "/admin/register", en esta página puede acceder cualquier usuario que tenga una sesión activa.

    . "/admin/manageFeedback": Página para poder ver y eliminar los feedbacks envíados. Únicamente los usuarios con role de admin pueden acceder a esta página.

Para acceder a la sección de admin utilice el usuario "tester@admin.com", contraseña: "testerAdmin".


# Estructura interna

- **Symfony**:  
        Para facilitar la creación, depuración y refactorización del sitio web se ha utilizado e implementado el framework symfony. El enrutamiento, posible uso de las plantillas html, sencilla conexión a base de datos son muchas de las razones por las que he optado en usar esta framework.
        
        La base de datos consiste en una única entidad, Feedback, que guarda las propuestas de los internautas para mejorar el sitio web.

- **Estructura de ficheros**:
        Como la página está implementada con Symfony, utiliza su estructura de archivos. Los archivos relacionados con el CSS, las imágenes y el javascript están en "/public", las plantillas html en "/templates" y el código en "/src".
