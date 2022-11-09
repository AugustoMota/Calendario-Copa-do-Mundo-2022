

function createGame(player1,hour,player2){
    return `
        <li>
            <img src="assets/icon-${player1}.svg" alt="Brazil">
            <strong>${hour}</strong>
            <img src="./assets/icon-${player2}.svg" alt="Servia">
    </li>

    
    `

}


let delay = -0.3;

function createCard(date,day,games){
    delay = delay + 0.4;
    return `
    
    <div class="card" style="animation-day:" ${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
       ${games}
    </ul>
</div>
    
    `
}


document.querySelector("#cards").innerHTML = 

createCard("24/11",'Quinta' ,createGame( 'brazil','16:00','serbia')) +
createCard("28/11",'Segunda', createGame('brazil','13:00','swi') + createGame('portugal','16:00',"urugai") ) +
 createCard('02/12','Sexta', createGame('brazil','16:00','camerom','jogo 1')) +
 createCard('02/12','Sexta', createGame('brazil','16:00','camerom')) 







