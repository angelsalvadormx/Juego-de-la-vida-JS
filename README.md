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
