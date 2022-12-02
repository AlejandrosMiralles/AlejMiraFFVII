# Alejandro Miralles Ruiz
## Proyecto final: página web propia
### 2nDAW

Esta página no está terminada, faltan por implementar muchas cosas: un correcto padding, hacer que la web sea responsiva, juntar el modo día y modo noche, tratar el feedback del formulario y un largo etcetera. Sin embargo, dado los plazos de entrega me veo en la obligación de entregar está página a medio hacer, pues el javascript sí que está completo.  


A continuación voy a especificar las características de la web:

# Javascript

* **checkForm.js**:  

        "/Javascript/CheckForm.js"  

    Permite que el formulario no pueda ser enviado sin ser rellenado previamente. Si se hace eso, aparecerá un mensaje de alerta avisando del problema.   
    Además, el programa permite que el botón "Borrar datos del formulario" borre los datos introducidos por el usuario por si este quiere reescribir su retroalimentación desde 0. 
    Actualmente el programa está únicamente implementado en "/index.html". 

- **cookies.js**:  

        "/Javascript/Cookies.js"  

    

    En un futuro no muy lejano está página web combinará la carpeta "/Modo día" y "/Modo noche" en una sola mediante php. Este decidirá que estilo ha de aplicar mediante una cookie llamada "morningMode" que decidirá si aplicar el modo día o su contraparte. Sin embargo, php se limitará a leer la cookie, no a guardarla. Es a través de javascript con el que se escribirá la cookie.  
    Por ahora el programa sólamente está implementado en "/Modo día/index.html" y "/Modo noche/index.html".
        
- **expandImg.js**:  

        "/Javascript/ExpandImg.js"  

    

    En la página personal de cada monstruo hay una imagen de este. Con este programa se pretende poder visualizar la imagen mejor. Al clickar sobre esta, aparecerá otra imagen que ocupará toda la pantalla.
    En este momento, el programa está implementado en "Modo día/Monstruos/Joker.html", "Modo día/Monstruos/Ladron.html", "Modo día/Monstruos/SoldadoRaso.html" y "Modo día/Monstruos/Serpiente.html".

- **showMonsterCategory.js**:  

        "/Javascript/ShowMonsterCategory.js"  

    

    A la mínima que la página web crezca en contenido, y por tanto en páginas de monstruos, la búsqueda de enemigos se volverá más tediosa. Para ello, se han creado unos botones para seleccionar el tipo de monstruo que se está buscando y así ocultar el resto de monstruos: todos, jefe, humanoide, etc.  
    Usualmente esta tarea recae en manos del servidor, sin embargo quería que el programa funcionase rápidamente. Si hubiesen miles de páginas indexadas en lugar de decenas, sí que cambiaría el programa para que funcionase desde el servidor.  
    Por ahora, este programa únicamente está implementado en "Modo día/Monstruos/Monstruos.html".  
    