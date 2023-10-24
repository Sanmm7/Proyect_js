function calcularTime(){

let tiempo= new Date();
let hora= tiempo.getHours();
let minuto=tiempo.getMinutes();
let segundo=tiempo.getSeconds();
hora = hora < 10 ? "0" + hora : hora;
minuto = minuto < 10 ? "0" + minuto : minuto;
segundo = segundo < 10 ? "0" + segundo : segundo;

let pantallaReloj = hora + ":" + minuto + ":" + segundo;
let relojDigital = document.querySelector(".relojito");
relojDigital.innerHTML = pantallaReloj;
}
setInterval(calcularTime,1000);