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
  let vecinos = buscarVecinos(2,2);
  console.log(vecinos);
  let numVecinosVivos = buscarVecinosVivos(vecinos);
  console.log("numVecinosVivos ",numVecinosVivos);
  
  actualiza_estado(numVecinosVivos,"2,2");
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

// Busca busca cuantos vecinos vivos tiene
const buscarVecinosVivos = (vecinos)=>{
  let contador = 0;
  vecinos.forEach(vecino => {
    if(conf.vivos.find(vivo=> vivo == vecino) != undefined){
      contador++;
    }
  });
  return contador;
}

// Actualiza el estado del la celula
const actualiza_estado =(numVecinosVivos,celula) =>{
  const elemento = document.getElementById(celula);
  console.log(elemento);
  if(elemento.classList.contains('vivo')){
    if(numVecinosVivos == 0 || numVecinosVivos > 3){
      elemento.classList.remove('vivo');
    }
  }else if(numVecinosVivos == 3){
    elemento.classList.add('vivo')
  }
}


