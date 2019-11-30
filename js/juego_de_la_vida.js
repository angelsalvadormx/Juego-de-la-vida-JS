/**
 * @description Ejecuta la función cargarTablero y dentro de un setInterval la función buscarSobrevivientes
 * 
 */
const start = () => {
  cargarTablero();
  setInterval(() => {
    buscarSobrevivientes();
  }, config.tiempo);
}

/**
 * @description Inserta los elementos li dentro del tablero con su id que es su cordenada  y la clase 'vivo' si la cordenada se encuentra en el array de vivos del objeto config. ademas agrega unos estilos al tablero 
 */
const cargarTablero = () => {
  let html = "", clase = "", found = undefined;
  for (let i = 0; i < config.width; i++) {
    for (let j = 0; j < config.height; j++) {
      found = config.vivos.find(vivo => vivo == i + "," + j);
      clase = found != undefined ? 'vivo' : '';
      html += "<i id='" + i + "," + j + "' class='" + clase + "'></i>";
    }
  }
  config.tablero.style = "grid-template-columns: repeat(" + config.width + ", 20px);grid-template-rows: repeat(" + config.height + ", 20px)";
  config.tablero.innerHTML = html;
}

/**
 * @description Recorre todas los elementos que contiene el tablero, ejecuta la función de buscarVecinos, buscarVecinosVivos,actualizarEstado,buscarTodosLosVivos
 */
const buscarSobrevivientes = () => {
  console.log('Buscando sobrevivientes....');
  let vecinos = [];
  let numVecinosVivos = 0;
  for (let x = 0; x < config.width; x++) {
    for (let y = 0; y < config.height; y++) {
      vecinos = buscarVecinos(x,y);
      numVecinosVivos = buscarVecinosVivos(vecinos);
      actualizarEstado(numVecinosVivos,x+","+y);
    }
  }
  buscarTodosLosVivos();
}

/**
 * @description Buscar todos los vecinos cerca de la cardenada pasada por los parámetros.
 * @param {int} x 
 * @param {int} y 
 * @returns {Array} Regresa un array con los vecinos encontrados
 */
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

/**
 * @description Busca todos los vecinos vivos.
 * @param {Array} vecinos 
 * @returns {int} Regresa el número total de vecinos vivos encontrados.
 */
const buscarVecinosVivos = (vecinos)=>{
  let contador = 0;
  vecinos.forEach(vecino => {
    if(config.vivos.find(vivo=> vivo == vecino) != undefined){
      contador++;
    }
  });
  return contador;
}
 
/**
 * @description Actualiza el estado del elemento que tenga el id de la célula, agregando o removiendo la clase de vivo
 * @param {int} numVecinosVivos 
 * @param {string} idCelula 
 */
const actualizarEstado =(numVecinosVivos,idCelula) =>{
  const elemento = document.getElementById(idCelula);
  if(elemento.classList.contains('vivo')){
    if(numVecinosVivos <= 1 || numVecinosVivos > 3){
      elemento.classList.remove('vivo');
    }
  }else if(numVecinosVivos == 3){
    elemento.classList.add('vivo')
  }
}

/**
 * @description Busca todos los elementos que tenga la clase vivo y actualiza el array de vivos en el objeto config
 */
const buscarTodosLosVivos=()=>{
  let vivos = document.getElementsByClassName('vivo');
  config.vivos = [];
  if(Object.keys(vivos).length > 0){
    Object.keys(vivos).forEach((index) =>{
      config.vivos.push(vivos[index].getAttribute('id'));   
    });
  }
}


