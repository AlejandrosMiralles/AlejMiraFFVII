# Alejandro Miralles Ruiz
## Proyecto final: página web propia
### 2nDAW

Esta página no está terminada, faltan por implementar muchas cosas: un correcto padding, hacer que la web sea responsiva, juntar el modo día y modo noche, tratar el feedback del formulario y un largo etcetera. Sin embargo, dado los plazos de entrega me veo en la obligación de entregar está página a medio hacer, pues el javascript sí que está completo.  


A continuación voy a especificar las características de la web:

# Javascript

- **SendForm.js**:  

        "/Javascript/SendForm.js"  


    Permite que el formulario no pueda ser enviado sin ser rellenado previamente. Si se hace eso, aparecerá un mensaje de alerta avisando del problema.   
    Además, el programa permite que el botón "Borrar datos del formulario" borre los datos introducidos por el usuario por si este quiere reescribir su retroalimentación desde 0. 
    El programa está únicamente implementado en "/index.html". 



- **cookies.js**:  

        "/Javascript/Cookies.js"  

    
    En un futuro no muy lejano está página web combinará la carpeta "/Modo día" y "/Modo noche" en una sola mediante php. Este decidirá que estilo ha de aplicar mediante una cookie llamada "morningMode" que decidirá si aplicar el modo día o su contraparte. Sin embargo, php se limitará a leer la cookie, no a guardarla. Es a través de javascript con el que se escribirá la cookie.  
    El programa funciona en toda la página web. Si detecta algún error, borre las cookies del navegador y reinicie la página.



- **expandImg.js**:  

        "/Javascript/ExpandImg.js"  


    En la página personal de cada monstruo hay una imagen de este. Con este programa se pretende poder visualizar la imagen mejor. Al clickar sobre esta, aparecerá otra imagen que ocupará toda la pantalla.
    En este momento, el programa está implementado en todas las páginas de monstruo. 



- **showMonsterCategory.js**:  

        "/Javascript/ShowMonsterCategory.js"  

    
    A la mínima que la página web crezca en contenido, y por tanto en páginas de monstruos, la búsqueda de enemigos se volverá más tediosa. Para ello, se han creado unos botones para seleccionar el tipo de monstruo que se está buscando y así ocultar el resto de monstruos: todos, jefe, humanoide, etc.  
    Usualmente esta tarea recae en manos del servidor, sin embargo quería que el programa funcionase rápidamente. Si hubiesen miles de páginas indexadas en lugar de decenas, sí que cambiaría el programa para que funcionase desde el servidor.  
    Por ahora, este programa únicamente está implementado en "/monstruos/".  
    


- **RemoveFeedback.js**:  

        "/Javascript/RemoveFeedback.js"  

    Para facilitar el manejo de feedbacks al dueño de la web, se ha permitido que desde la página del administrador se puedan eliminar.



# Php


- **Symfony**:  

        ""

- **Cookies**:  

        ""

- **Sistema de usuarios**:  

        ""

- **Manejo de feedback**:  

        ""

- **Validación de formulario**:  

        ""




# Diseño


- **Perfil de usuario**:  
        Mi perfil de usuario describe a los adultos entre 25-33 años que crecioeron jugando Final Fantasy Vii. Pueden o no gustarle el resto de juegos de la saga, pero le encantan jugar JRPGs. SDada su avanzada edad, tienen un poder adquisitivo mínimamente grande. Un día le dio por entrar en mi página por pura curiosidad y amor al juego y para aprender algo nuevo de él. Sus personajes favortios son Cloud y Sefirot. 



- **Guía de estilo**:  
        Hay dos estilos: nocturno y diurno. 
        En los dos tienen una imagen siempre en la cabecera y un enlace que cambie de estilo. Además la letra de los dos estilos es la misma, teniendo que tener esta gracia para facilitar la lectura de grandes bloques de texto. 
        El estilo nocturno posee un fondo negro, aunque el fondo del cuerpo es ligeramente más claro. Las letras son de un color azul claro tirando a verdoso para recordar el clásico azul que suele acompañar al logo de FFVII.
        El estilo diurno en cambio incorpora un fondo verde azulado. El cuerpo tiene un fondo azul tirando a moradoy una letra de color blanca, resultando en un interfaz muy similar a la del menú del juego original. 


- **CSS**:  
        He aplicado mis conomientos de css y me he permitido la creación de dos CSS disitntos, uno de noche y otro de día. Los dos tienen como objetivo parecerse a la interfaz gráfica del juego.
      

- **Html semántico(nav, sidebar,etc.)**:  
        Para facilitar la posterior refactorizar y actualizarse con la sintáxis del HTML5, se ha hecho que la página sea semántica. No hay ningún elemento '<div id="header">', sino '<header>'. 


- **Uso de bootstrap**:  
        Para facilitar la refactorización y depuración, se ha implementado la famosa biblioteca de bootstrap a la página. Esta simplifica las tareas de colacación de elementos y otorga una nueva sintaxis a la página, entre otras cosa. 


- **Colores, ruta visual, etc.**:  
        Debido a los colores y la colocación de los elementos, la ruta visual del "/"(index) provoca que el usuario termine mirando la imagen cortada de "Información general" y esté tentado a scrollear abajo. Este mismo fenomeno también sucede en "/monstruos" y todas las páginas de monstruos. 

        Además para evitar que la página se encuentre desbalanceada se ha hecho que la cabecera y el pie de página, que ocupan el mismo espacio, sean más grandes que el nav y el cuerpo de la página. Formando como resultando una gran "I".


- **Metas**:  
        He añadido algunas etiquetas meta a la página para que el SEO favorezca mi página frente a otras en el buscador de Google. Por ejemplo la etiqueta meta Keywords hace que el SEO favorezca dicha página cuando el internauta busca por las palabras introducidas.

- **Letra**:  
        En un intento de crear una página web única y completamente distinta a las demás, se ha decidido que la tipografía sea una no convencional, la Roman fatal seriff. Esta tipografia es de la clase de las letras con gracia, las cuales ayudan en la lectura de grandes bloques de texto. Ideal para una wiki como esta. 

- **Sistema de archivos**:  
        Para refactorizar la app y vovlerla mucho más simple de entender se ha seguido el sistema de ficheros estándard. Todas las imágenes están reunidas en un fichero "img", los javascripts en "js" y los estilos en "styles". Por normas de symfony los ficheros html se encuentran en un fichero distinto a la de public.


- **Favicon**:  
        Se ha introducido un favicon original que consiste en el logo del juego, pero muy pixelado y con algunas diferencias para que no fuese exactamente igual.

- **Licencia de la web en CC**:  
        Para evitar posibles robos de contenido a mi página se ha creado una licencia en Creative Commons, la cual se ha introducido al pie de la página. 
        La creado para que aunque se puedan cambiar los contenidos y compartir, siempre se deba mencionar el material original y distribuir con la misma licencia.

- **Imágenes legales**:  
        :,(