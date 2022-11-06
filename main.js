
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
createCard("20/11","domingo",
createGame('catar','equador','13:00'))
+
createCard("21/11","segunda",
createGame('england','iran','10:00') +
createGame('senegal','netherlands','13:00')+
createGame('eua','wales','16:00') )
+ 
createCard("22/11","terça",
createGame('argentina','arabia','07:00')+
createGame('dinamarca','tunisia','10:00')+
createGame('mexico','polonia','13:00')+
createGame('franca','australia','16:00') )
+
createCard("23/11","quarta",
createGame('marrocos','croacia','07:00')+
createGame('alemanha','japao','10:00')+
createGame('espanha','costarica','13:00')+
createGame('belgica','canada','16:00'))
+
createCard("24/11","quinta",
createGame('suica','camaroes','07:00')+
createGame('uruguai','coreiadosul','10:00')+
createGame('portugal','gana','13:00')+
createGame('brazil','servia','16:00'))
+
createCard("25/11","sexta",
createGame('wales','iran','07:00')+
createGame('catar','senegal','10:00')+
createGame('netherlands','equador','13:00')+
createGame('england','eua','16:00'))
+
createCard("26/11","sabado",
createGame('tunisia','australia','07:00')+
createGame('polonia','arabia','10:00')+
createGame('franca','dinamarca','13:00')+
createGame('argentina','mexico','16:00'))
+
createCard("27/11","domingo",
createGame('japao','costarica','07:00')+
createGame('belgica','marrocos','10:00')+
createGame('croacia','canada','13:00')+
createGame('espanha','alemanha','16:00'))
+
createCard("28/11","segunda",
createGame('camaroes','servia','07:00')+
createGame('coreiadosul','gana','10:00')+
createGame('brazil','suica','13:00')+
createGame('portugal','uruguai','16:00'))
+
createCard("29/11","terca",
createGame('equador','senegal','12:00')+
createGame('netherlands','catar','12:00')+
createGame('iran','eua','16:00')+
createGame('wales','england','16:00'))
+
createCard("30/11","quarta",
createGame('tunisia','franca','12:00')+
createGame('australia','dinamarca','12:00')+
createGame('polonia','argentina','16:00')+
createGame('arabia','mexico','16:00'))
+
createCard("01/12","quinta",
createGame('croacia','belgica','12:00')+
createGame('canada','marrocos','12:00')+
createGame('japao','espanha','16:00')+
createGame('costarica','alemanha','16:00'))
+
createCard("02/12","quinta",
createGame('coreiadosul','portugal','12:00')+
createGame('gana','uruguai','12:00')+
createGame('servia','suica','16:00')+
createGame('camaroes','brazil','16:00'))



