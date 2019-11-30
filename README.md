# Juego-de-la-vida-JS

## Configuración

* **Configurar celulas vivas por default**: En el atributo *vivos* del objecto *config* puedes agregar las cordenas de default.

* **Configurar el tamaño del tablero**: Puedes cambiarlos a tu gusto modificando los atributos *width* y *height* del objecto *config*, tambien pudes elegir en que elemento mostrar el table modificando el atributo *tablero* del objeto *config*

* **Configurar el tiempo**: En el attributo *tiempo* del objecto *config* lo puede modificar, por default esta 2 segundos

## Ejemplo de una configuración
```html
 <script>
    const config = {
      "vivos": ["2,1", "2,2", "3,2", "3,3", "4,2"],
      "width": 50,
      "height": 50,
      "tablero": document.getElementById('main'),
      "tiempo":2000
    }

    start();
  </script>
```
## Ejemplo completo
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Juego de la vida</title>
  <!-- Estilo -->
  <link rel="stylesheet" href="./css/juego_de_la_vida.css">
</head>

<body>
  <!-- Tablero -->
  <main id="main"></main>
  <script src="./js/juego_de_la_vida.js"></script>
  <script>
    // Configuración inicial
    const config = {
      "vivos": ["2,1", "2,2", "3,2", "3,3", "4,2"],
      "width": 50,
      "height": 50,
      "tablero": document.getElementById('main'),
      "tiempo":2000
    }

    /**
     * @Ubicación del archivo: js/juego_de_la_vida.js
     * @linea: 4  
     */
    start();
  </script>
</body>

</html>
```
