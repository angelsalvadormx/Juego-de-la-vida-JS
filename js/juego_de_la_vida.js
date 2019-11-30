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
  let html = "";
  for (let i = 0; i < conf.width; i++) {
    for (let j = 0; j < conf.height; j++) {
      html += "<i id='"+i+"-"+j+"'></i>";
    }
  }
  conf.tablero.innerHTML = html;
}

// actualizar generacion
const buscarSobrevientes = (vivos)=>{

}

