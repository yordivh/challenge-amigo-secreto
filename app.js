function agregarAmigo(){

    const nombreEscrito = document.getElementById("amigo");
    const nombre= nombreEscrito.value.trim();
    console.log(nombre);
    
    if (nombre !==""){ 
        lista= document.getElementById("listaAmigos");  
        const nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = nombre;
        lista.appendChild(nuevoAmigo);
        nombreEscrito.value = "";
    }else{
        alert("¡¡Ingresa un nombre valido por favor!!");
    }
}


function sortearAmigo(){
    const lista = document.getElementById("listaAmigos");
    const amigos = lista.getElementsByTagName("li"); 
    if(amigos === 0){
        alert("No hay ningun amigo,ingresa uno por favor");
        return;
    }

    const indice= Math.floor(Math.random()*amigos.length);
    const nombreGanador = amigos[indice].textContent;
    const resultado =document.getElementById("resultado");
    resultado.innerHTML="";
    const li =document.createElement("li");
    li.textContent = (`El ganador del sorteo es ${nombreGanador}`);
    resultado.appendChild(li);
}
