# LabCar

Proyecto Final Sprint 4 - Bootcamp Laboratoria.

Utilizamos Bootstrap como framework de CSS y el API de Google maps.

### LabCar

Es una empresa de taxis que te permite pedir un taxi cuando quieras y en donde quieras.
Tiene una gran cantidad de conductores por todo el departamento y cuenta con las tarifas mas bajas del mercado.
Como sabemos que el tiempo de los clientes es dinero, el servicio se compromete en dar un 10% de descuento en sus viajes
si las unidades demoran en llegar más de lo establecido.

### Web Page

Para la realización de la web se determo la siguiente estructura:

- Navbar
- Hero
- Información
- Conduce
- Tarifa
- Footer

#### Navbar

Se utilizaron las grillas de Bootstrap. 
En desktop, el navegador tiene una distribución horizontal, con el logo ubicacido a la izquierda y el menú a la derecha.
En vista mobile, el logo queda centrado y es visible un menú hamburguesa desplegable.

#### Sección Hero, Información y Conduce

Para estas 3 secciones la distribución es únicamente con grillas de Bootstrap. 
En la sección Hero y Conduce, el background se posiciono con la propiedad Background-position-y para acomodar las imágenes en la vista desktop y mobile.

#### Sección Tarifa/ API Google Maps

La funcionalidad básica del mapa es ubicar la posición de la persona que ingresa a la página según las coordenadas base.
Utilizando la documentación de Google, se cargó la librería para el autocompletado de los inputs, se llamó a la función Init Map para la ubicación del marcador, el trazado de la ruta y el calculo de la tarifa.
En la vista mobile, se oculta el mapa y solo se muestran los inputs y la tarifa de la ruta.

#### Footer

Se utilizaron las grillas de Bootstrap y display flex para el posicionamiento de las iconos e imágenes. 
La clase hidden fue recurrente para ocultar los links que no se mostraron en la vita mobile. 

--------------------------------------------------------------------------------

Visualiza el resultado aquí : 


