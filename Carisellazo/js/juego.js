let cara = 0;
let sello = 0;
let cont=0;
let total=0;
let totalapuesta=0
let moneda = document.querySelector(".moneda");
let girarBtn = document.querySelector("#jugar");
let reinicioBtn = document.querySelector("#volver");
let apuestaInput = document.querySelector("#apuest");
let opcionInput = document.querySelector("#opcion");



girarBtn.addEventListener("click", () => {
   
    if(apuestaInput.value !='' && opcionInput.value!=''){

        do{
        let i = Math.floor(Math.random() * 2);
        cont++;

    moneda.style.animation = "none";
    let opcUsuario=parseInt(opcionInput.value)
    let apuestaUsu=parseInt(apuestaInput.value)
    totalapuesta+=apuestaUsu;
    
    if(i){
            moneda.style.animation = "spin-cara 2s forwards";
             setTimeout(function(){
                                
             if(i===opcUsuario){
                                        total=apuestaUsu+=1000;
                                        swal(`Felicidades, ganaste la moneda cayo en cara. ganaste $1000. en total tienes: ${total}`);
                            
                                    } else{
                                        total=apuestaUsu-=1000;
                                        swal(`lo sentimos, has perdido la moneda cayo en cara. perdiste $1000 en total tienes: ${total}`);
                                    
                                    }
                                }, 3000);
                                cara++;

    }
    else{
        moneda.style.animation = "spin-sello 2s forwards";
        setTimeout(function(){
            if(i===opcUsuario){
                total=apuestaUsu+=1000;
                swal(`Felicidades, ganaste la moneda cayo en sello. ganaste $1000. en total tienes: ${total}`);
               
            } else{
                total=apuestaUsu-=1000;
                swal(`lo sentimos, has perdido la moneda cayo en sello. perdiste $1000 en total tienes: ${total}`);
                
            }
        }, 3000);
        sello++;
    }
    setTimeout(updateStats, 3000);
    disableButton();
    }while(total <=0){ swal('Ups!,ya no tienes dinero')}
}
    else{
        swal('Selecciona una opcion para jugar y un valor a apostar')
    }
    
});



//genera el cambio 


function updateStats(){
    document.querySelector("#cara-count").textContent = `cara: ${cara}`;
    document.querySelector("#sello-count").textContent = `sello: ${sello}`;
    document.querySelector("#cant-count").textContent = `jugadas: ${cont}`;
    document.querySelector("#dinero-count").textContent = `dinero: ${total}`;
   
}

function disableButton(){
   girarBtn.disabled = true;
    setTimeout(function(){
       girarBtn.disabled = false;
    },3000);
}

//reiniciar la partida 
reinicioBtn.addEventListener("click",() => {
    swal(`Resumen de la partida: cantidad de partidas${cont}, dinero acumulado por apuestas: ${totalapuesta} monto final: ${total}`)
    .then((result) => {
        
            window.location.href = "./index.html";
            
        
      })
      
    
})



 

   
        
    