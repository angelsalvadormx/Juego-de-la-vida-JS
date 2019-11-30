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
  setInterval(() => {
    buscarSobrevivientes()
  }, 2000);
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
  for (let x = 0; x < conf.width; x++) {
    for (let y = 0; y < conf.height; y++) {
      let vecinos = buscarVecinos(x,y);
      console.log(vecinos);
      let numVecinosVivos = buscarVecinosVivos(vecinos);
      console.log("numVecinosVivos ",numVecinosVivos);
      actualizar_estado(numVecinosVivos,x+","+y);
    }
  }
  buscarTodosLosVivos();
  console.log(conf.vivos);
  
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
const actualizar_estado =(numVecinosVivos,celula) =>{
  const elemento = document.getElementById(celula);
  console.log(elemento);
  if(elemento.classList.contains('vivo')){
    if(numVecinosVivos <= 1 || numVecinosVivos > 3){
      elemento.classList.remove('vivo');
    }
  }else if(numVecinosVivos == 3){
    elemento.classList.add('vivo')
  }
}

const buscarTodosLosVivos=()=>{
  let vivos = document.getElementsByClassName('vivo');
  console.log("vivos",vivos);
  
  conf.vivos = [];
  if(Object.keys(vivos).length > 0){
    Object.keys(vivos).forEach((index) =>{
      conf.vivos.push(vivos[index].getAttribute('id'));
      
    });
  }
  
}


