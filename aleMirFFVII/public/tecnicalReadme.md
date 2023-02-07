# Alejandro Miralles Ruiz
## Proyecto final: página web propia
### 2nDAW

A continuación voy a especificar las características de la web. Estas están divididas en: Cliente, Servidor y Diseño. 
En Cliente habla sobre la programación que se ejecuta desde el lado del cliente, desde el navegador. Está unicamente formado por ficheros javascripts y que se encuentran en la carpeta /public/javascript/. 
En Servidor cuenta como funciona la página desde el lado del servidor. Qué framework utiliza, la estructura de la base de datos, el enrutamiento, etc.
Y en Diseño se informa de todas las decisiones de diseño que se tomaron al realizar la página: CSS, biblioteca utilizada, información sobre el uso de las imágenes, etc.

Si desea conocer un contenido más general de la página (las páginas que existen, estructura interna del servidor, etc.) lea el fichero "readme.md".

# Cliente

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

- **Plugin y widget**
        El plugin es un plugin casero creado por mi que permite la desaparición de elementos. Es utilizado por el script "RemoveFeedback" y por tanto se utiliza en "/admin/manageFeedback". El script sigue las normas de creación de plugins y se encuentra localizado en "/js/pluggins/".  
        El widget es un widget implementado en "infogeneral" que permite recoger sus diferentes secciones, formando un gran acordeon. 


# Servidor

- **Symfony**:  
        Para facilitar la creación, depuración y refactorización del sitio web se ha utilizado e implementado el framework symfony. El enrutamiento, posible uso de las plantillas html, sencilla conexión a base de datos son muchas de las razones por las que he optado en usar esta framework.  
        La base de datos consiste en una única entidad, Feedback, que guarda las propuestas de los internautas para mejorar el sitio web.


- **Cookies**:  
        El sitio web tiene dos estilos, el diurno y el nocturno. Se ha decidido crear una cookie para saber cuál es el estilo preferente del usuario. Esta cookie se crea desde un javascript, y se consulta desde "base.html.twig", el cual es cargado en todas las páginas de la web y es donde se decide el estilo a usar.


- **Sistema de usuarios**:  
        La wiki tiene un sistema de usuarios oculto. Por regla general el internauta promedio no tiene ninguna necesidad de crearse una cuenta en esta wiki, por lo que tanto el login como el register están ocultos (aunque accesibles). Para llegar a ellos hay que ir a la ruta "admin/login" y "admin/register", respectivamente.


- **Manejo de feedback**:  
        Los usuarios pueden enviar, a través de un formulario, propuestas de mejora a la página, ya sean modificaciones al diseño de la página, solicitaciones para incluir nuevas entradas, añadir nueva información, etc. Para facilitar la tarea de feedback he creado una página, "/admin/manageFeedback", que muestra todos los feedbacks enviados y permite a través de AJAX su eliminación.


- **Validación de formulario**:  
        Symfony valida el formulario automáticamente. Simplemente ha de evitar que el campo formulario sea nulo, lo cual se logra con las anotaciones en la variable "content" de la entidad Feedback.





# Diseño

- **Perfil de usuario**:  
        Mi perfil de usuario describe a los adultos entre 25-33 años que crecioeron jugando Final Fantasy Vii. Pueden o no gustarle el resto de juegos de la saga, pero le encantan jugar JRPGs. SDada su avanzada edad, tienen un poder adquisitivo mínimamente grande. Un día le dio por entrar en mi página por pura curiosidad y amor al juego y para aprender algo nuevo de él. Sus personajes favortios son Cloud y Sefirot. 


- **Guía de estilo**:  
        Hay dos estilos: nocturno y diurno. 
        En los dos tienen una imagen siempre en la cabecera y un enlace que cambie de estilo. Además la letra de los dos estilos es la misma, teniendo que tener esta gracia para facilitar la lectura de grandes bloques de texto. 
        El estilo nocturno posee un fondo negro, aunque el fondo del cuerpo es ligeramente más claro. Las letras son de un color azul claro tirando a verdoso para recordar el clásico azul que suele acompañar al logo de FFVII.
        El estilo diurno en cambio incorpora un fondo verde azulado. El cuerpo tiene un fondo azul tirando a moradoy una letra de color blanca, resultando en un interfaz muy similar a la del menú del juego original. 


- **CSS**:  
        He aplicado mis conomientos de css y me he permitido la creación de dos CSS distintos, uno de noche y otro de día. Los dos tienen como objetivo parecerse a la interfaz gráfica del juego.
      

- **Html semántico(nav, sidebar,etc.)**:  
        Para facilitar la posterior refactorizar y actualizarse con la sintáxis del HTML5, se ha hecho que la página sea semántica. No hay ningún elemento 'div id="header" ', sino "header". 


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

- **Edición de imágenes**
        Las imágenes de internet son muy convenientes, pero no siempre tendremos la suerte de encontrar una imagen perfecta para todas las situaciones. En esos casos podría ser interesante crear o editar una imagen.
        Por ejemplo la imagen de los monstruos de la página principal es una imagen editada. Se cogió una imagen de internet (Se puede acceder a ella a través del footer) y de ellas se crearon otras dos imágenes iguales y se juntaron. Posteriormente se eliminó el fondo y como resultado se consiguió una imagen perfecta.

- **Imágenes legales**:  
        Se ha intentado que la página sea lo más legal posible. Para ello se ha investigado la política de SquareEnix respecto a las creaciones de fans del Final Fantasy VII fuera de Japón y se ha intentado que todas las imágenes de la página estén licenciadas en CC o sean del juego original.
        En la mayoría de casos he tenido que proporcionar un link a la imagen y a su respectiva licencia en el footer de cada página.

