
function createGame(time1,time2,hora){
    return `
    <li>
        <img src="./assets/icon-${time1}.svg">
        <strong>${hora}</strong>
        <img src="./assets/icon-${time2}.svg">
    </li>`

}

let delay = 0;
function createCard(data,dia,games){
    delay=delay + .4;
    return `
     <div class="card" style="animation-delay: ${delay}s">
        <h2>${data}<span>${dia}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>`
}

document.querySelector("#cards").innerHTML = 

createCard("21/11","segunda",
createGame('brazil','camaroes','11:00') +
createGame('brazil','camaroes','11:00')+
createGame('brazil','camaroes','11:00') )
+ 
createCard("24/11","terça",
createGame('brazil','camaroes','11:00')+
createGame('brazil','camaroes','11:00')+
createGame('brazil','camaroes','11:00') )
+
createCard("28/11","quinta",
createGame('brazil','camaroes','11:00')+
createGame('brazil','camaroes','11:00')+
createGame('brazil','camaroes','11:00') )


