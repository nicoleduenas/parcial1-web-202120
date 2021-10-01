# NBA Players

### Configuración inicial 🔧

1. Realizar el fork del repositorio

2. Clonar el repositorio

3. Instalar npm modules
   ```bash
   npm install
   ```
4. Ejecutar servidor
   ```bash
   npm run start
   ```
5. Ir a **http://localhost:3000** para ver la pantalla inicial

## Documentación endpoint

Agregue aquí al documentación del endpoint elaborado.

Endpoint: http://localhost:3000/api?input={altura}

Este endpoint lo que hace es guardar la altura en pulgadas de cada jugador. Cuando se recibe un request, se buscan las parejas de jugadores que dado un elemento e1, exista la resta {altura} - altura de e1. Con esta forma, se encuentran las parejas. Se realiza haciendo fors sobre un mapa que tiene como llave el nombre del jugador y como valor su altura en pulgadas.

Un ejemplo de respuesta es para http://localhost:3000/api?input=138

[
{"first_player":"Chucky Atkins","second_player":"Nate Robinson"}
,{"first_player":"Speedy Claxton","second_player":"Nate Robinson"}
,{"first_player":"Brevin Knight","second_player":"Nate Robinson"}
,{"first_player":"Nate Robinson","second_player":"Chucky Atkins"}
,{"first_player":"Nate Robinson","second_player":"Speedy Claxton"}
,{"first_player":"Nate Robinson","second_player":"Brevin Knight"}
,{"first_player":"Nate Robinson","second_player":"Mike Wilks"}
,{"first_player":"Mike Wilks","second_player":"Nate Robinson"}
]


