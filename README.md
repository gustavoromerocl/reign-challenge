## REIGN CHALLENGE 


### Introducción

Prueba técnica para la empresa Reign

### Contexto 

Se solicita crear una spa que consume un api-rest de noticias:

Requerimientos:

Consumir los siguientes endpoints:

- API [https://hn.algolia.com/api] -> base url
- Angular: [https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0] -> recurso
- React: [https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=0] -> recurso
- Vuejs: [https://hn.algolia.com/api/v1/search_by_date?query=vuejs&page=0] ->recurso

- Se solicita crear un filtro de noticias para angular, react o vue
- Se debe consumir la siguiente información para las tarjetas author, story_title, story_url, created_at
- El filtro debe persistir en el local storage
- Los favoritos deben persistir en local storage
- El diseño de la app debe ser responsivo
- Cuando se haga click sobre un titulo debe abrir el enlace a la noticia
- Si se hace click en el botón de like no debe abrir un nuevo enlace
- Aplicar al titulo evento hover con estilo de opacidad en los elementos del card


### Solución

- La solución se realizará con la última vesrión de react-js utilizando como proyecto base el generado por el comando creat-react-app. 

- A continuación revisaremos de forma resumida los aspectos más importante del desarrollo de la solución:

##### Estrucutra de carpetas
<img src="/public/docs/estructura-de-carpetas.png" alt="estructura"/>

El orden del proyecto esta pensado para una fácil lectura y rápida ubicación de los contenidos. Para el desarrollo de los estilos de la solución usé styled components, por este motivo es que no hay archivo css con el nombre de los componentes a excepción de la configuración principal (index.js/index.css) donde puse las fuentes por default y la configuración de la visualización del scroll. El uso de esta librería nos permite escribir css en su sintaxis nativa o de una sintaxis muy similar a la de sass, existen diversas formas de integrarlo a un componente, pero la que más me gustó fue la que los incluye al momento de exportarlo. A conttinuación observamos un ejemplo de esto y además el uso de variables globales desde un tema configurado con styled components.

##### Tema global
<img src="/public/docs/global-theme.png" alt="tema global"/>

##### Exportando el componente de paginación con estilos
<img src="/public/docs/styled-export-component.png" alt="export styled component"/>

El manejo de rutas desde el cliente es el corazón de las single page aplication, para este desafío usé react-router-dom, su configuración es muy sencilla y nos entrega una robusta gama de herramientas.

##### Configuración de rutas
<img src="/public/docs/rutas.png" alt="rutas"/>

Para conseguir lo solicitado, consideré necesario también la intalación de zustand un state managment para centralizar el estado de la app, La razón por la que lo elegí es por que es muy amigable y fácil de utilizar y además permité la creación de multiples stores.
A continuación un ejemplo de su rápida configuración:

##### Configuración de la store de zustand
<img src="/public/docs/zustand.png" alt="zustand"/>

Por otro lado, la configuración de los providers utilizados en el main de la app es la siguiente:

##### Providers
<img src="/public/docs/providers.png" alt="provider"/>

Otro de los componentes importantes es Layout, el cual establece que partes de la app serán estáticas y las que no se reciben en el children, de esta manera además de el header puse el rabiobutton como estáticos, ya que se repite en ambas vistas del desafío. Mi intención era implementar react-virtualized para el infinite loader en lo contenido en los childrens, pero al instalar el paquete me generó conficto con la versión de react. 

##### Layout
<img src="/public/docs/layout.png" alt="provider"/>
Finalmente, lo visto anteriormente son las piedras angulares del funcionamiento de la app y que en conjunto hacen un gran trabajo. La forma en que organicé el desarrollo fue comenzando a crear los componentes y sus estilos de acuerdo a la maqueta. Entonces, una vez construidos les podría dar funcionalidad y posicionar en el DOM.

##### Creación de componentes
<img src="/public/docs/componentes1.png" alt="comp 1"/>

##### Posicionamiento e interacción
<img src="/public/docs/componentes2.gif" alt="comp2"/>

Commits de trabajo: 

- se agrega y configura react-router-dom
- starter project with create-react-app 
- Se estructura el proyecto - se integra styled components para trabaja… 
- layout - agregar fuentes roboto y baskerville desde google fonts
- layout - crear tema con los estilos necesarios declarados en la maqueta
- layout - agregar estructura semantica basica de la maqueta, margenes,…
- layout - componente radio button completado
- layout - componente card completado
- layout - componente de paginacion terminado
- layout - complete - correccion de codigo y e-stilos
- layout - componente de filtro terminado
- funcionalidad - Se agrega axios para consultas a la api
- funcionalidad - asignar enlaces de vistas al radiobutton
- funcionalidad - agregar e implementar zustand state managment 
- funcionalidad - se implementa componente de paginacion con zustand
- funcionalidad - agregar indicador de carga y manejo de errores
- funcionalidad - agregar shallow de zustand
- funcionalidad - agregar funcionalidad al componente dropdown
- funcionalidad - refactor en el performance de zustand
- funcionalidad - implementar store de zustand con la vista favoritos 
- funcionalidad - agregar manejo de errores y loading a la vista favoritos
- funcionalidad - agregar efecto hover sobre titulo y carta
- funcionalidad - fltro de elementos que contengan valores vacios
- funcionalidad - guardar filtro en local storage
- funcionalidad - deploy en netlify
- funcionalidad - refactor al filter de elementos nulos
- pagination component - agregar estilo solo a la pagina seleccionada
- dropdown y radiobutton - hover effect
- funcionalidad - generar resposive design
- unit testing - entorno configurado
- unit teting - api call incompleto

### Entorno de desarrollo (pre-requisitos)

- nodejs v16.13.1  
- react-test-renderer 18.1.0

### Stack

- react-js v18.1.0

### Dependencias

- react-router-dom v6.3.0
- styled-components v5.3.5
- hero-icons v1.0.6
- axios v0.21.1
- momentjs v2.29.3
- zustand v4.0.0-rc.1

### Instalación local

- npm install
- npm start

### Testing 

- npm run test

Durante le programación de la pruebas unitarias tuve conflicto la versión actual de react, styled components y la versión de jest de la que aprendí, por lo que no pude realizar el unit testing que tenia planeado a la llamada a la api y localstorage. De todas formas comparto el despliegue en consola:

<img src="/public/docs/coverage-testing.png" alt="jest"/>

### Deploy

- Netlify Link:
[https://voluble-daifuku-a6adaa.netlify.app/]

### Wiki

- [https://zustand.surge.sh/]
- [https://github.com/tailwindlabs/heroicons]
- [https://momentjs.com/]
- [https://styled-components.com/]

### Autor

- Gustavo Romero - Desarrollo y documentación

### Conclusiones

En conclusión, fue un desafío complejo con varias aristas pero que sin duda me deja con la sensación de que el tiempo invertido en aprender frontend no fue en vano, siempre habrá algo nuevo que aprender. Quedan varias cosas por hacer en el proyecto para mejorar la experiencia de usuario, sin embargo, lo considero el mínimo funcional que debiese tener un proyecto y el resto es solo cuestión de pulir. Gracias por la oportunidad, quedo atento a sus sugerencias y feedback para seguir mejorando mi habilidad.
