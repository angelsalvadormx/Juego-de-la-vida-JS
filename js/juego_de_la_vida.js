// Configuracion inicial
const conf = {
  "vivos": ["1,1", "2,1", "3,1"],
  "width": 5,
  "height": 5,
  "tablero": document.getElementById('main')
}

// iniciar el juego
const start = () => {
  cargarTablero();
  buscarSobrevivientes()
  /*setInterval(() => {
  }, 2000);*/
}

const cargarTablero = () => {
  let html = "", clase = "", found = undefined;
  for (let i = 0; i < conf.width; i++) {
    for (let j = 0; j < conf.height; j++) {
      found = conf.vivos.find(vivo => vivo == i + "," + j);
      clase = found != undefined ? 'vivo' : ''
      html += "<i id='" + i + "," + j + "' class='" + clase + "'></i>";
    }
  }
  conf.tablero.innerHTML = html;
}

// actualizar generacion
const buscarSobrevivientes = () => {
  console.log('Buscando sobrevivientes');
  let vecinos = buscarVecinos(1,2);
  console.log(vecinos);
  
}

const buscarVecinos = (x,y) => {
  let vecinos = [];
  let posicion = x+','+y;
  let tmpY = 0;
  x++;
  for (let i = 0; i < 3; i++) {
    tmpY = y + 1;
    for (let j = 0; j < 3; j++) {
      vecinos.push(x+","+tmpY);
      tmpY--;
    }
    x--;
  }
  return vecinos.filter(vecino => vecino != posicion );  
}


