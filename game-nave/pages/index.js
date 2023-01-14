let motor = false;

let combustivel = 45;
let velocidade = 0;
let aceleraçao = 0;
let altitude = 300;
let intervalo;
let liga = () =>{   
    motor = true;
    document.querySelector('#idN').src = 
    "firenave.png";  
}
let desliga = () =>{   
    motor = false;
    document.querySelector('#idN').src = 
    "nave.png";
}
let ciclo = () =>{
    if(combustivel <= 0) desliga();
    if(motor){
        aceleraçao = 0.2;
        combustivel --;
    }else
        aceleraçao = -0.3;
    velocidade += aceleraçao;
    altitude += velocidade;
    
    if(altitude <= 0){
        if(velocidade <= -2.4) alert("nave explodiu");
        else alert("pouso bem sucedido");
        clearInterval(intervalo);
    }

    document.getElementById("idInfo").innerHTML =
    `
        velocidade: ${velocidade.toFixed(2)}<br/>
        combustivel: ${combustivel}<br/>

    ` 
    document.querySelector('#idN').style.
    top = (300-altitude) + "px";
}

intervalo = window.setInterval(ciclo, 100);

document.addEventListener('mousedown', liga);//addEventListener adicione um evento no html
document.addEventListener('mouseup', desliga);
