// Configuracion inicial
const conf = {
  "vivos" : ["1,1","2,1","3,1"],
  "width" : 5,
  "height" : 5,
  "tablero" : document.getElementById('main')
}

// iniciar el juego
const start = ()=>{
  cargarTablero();
}

const cargarTablero = () => {
  let html = "",clase = "", found = undefined;
  for (let i = 0; i < conf.width; i++) {
    for (let j = 0; j < conf.height; j++) {
      found = conf.vivos.find(vivo=> vivo == i+","+j);
      clase = found != undefined ? 'vivo':'' 
      html += "<i id='"+i+","+j+"' class='"+clase+"'></i>";
    }
  }
  conf.tablero.innerHTML = html;
}

// actualizar generacion
const buscarSobrevientes = (vivos)=>{

}

