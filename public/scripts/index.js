//UIController

let player1, player2, btn;

let DOM = {
	player1: document.getElementById("player-1"),
	player2: document.getElementById("player-2"),
	btn: document.querySelector(".button")
};

DOM.btn.addEventListener("click", function() {
	let num1 = Math.floor(Math.random()*731);
	let num2 = Math.floor(Math.random()*731);

	getSuperhero(num1).then(data => {

	DOM.player1.innerHTML = `<div id= "player-1" class="player-panel-1 col-5">                    
                    <div class = "card">
                        <div class = "front">
                            <img id = "player-1" class = "card_picture" src="${data.image.url}">
                            <p class = "card_name">${data.name}</p>
                        </div>
                        <div class = "back">
                            <p class= "skill-item">Intelligence</p>
                            <div class="skill-container">
                                <span style = "width: ${data.powerstats.intelligence}%; 
                                animation: intelligence 8s;" class="skills"></span>
                            </div>

                            <p class= "skill-item">Strength</p>
                            <div class="skill-container">
                                <span style = "width: ${data.powerstats.strength}%; 
                                animation: strength 2s;" class="skills"></span>
                            </div>

                            <p class= "skill-item">Speed</p>
                            <div class="skill-container">
                               <span style = "width: ${data.powerstats.speed}%; 
                                animation: speed 2s;" class="skills"></span>
                            </div>

                            <p class= "skill-item">Durability</p>
                            <div class="skill-container">
                               <span style = "width: ${data.powerstats.durability}%; 
                                animation: durability 2s;" class="skills"></span>
                            </div>

                            <p class= "skill-item">Power</p>
                            <div class="skill-container">
                               <span style = "width: ${data.powerstats.power}%; 
                                animation: power 2s;" class="skills"></span>
                            </div>

                            <p class= "skill-item">Combat</p>
                            <div class="skill-container">
                               <span style = "width: ${data.powerstats.combat}%; 
                                animation: combat 2s;" class="skills"></span>
                            </div>               
                        </div>                 
                        </div>
                </div>`
});

getSuperhero(num2).then(data => {
	DOM.player2.innerHTML = `<div id= "player-2" class="player-panel-2 col-5">
                    <div class = "card">
                        <div class = "front">
                            <img id = "player-2" class = "card_picture" src="${data.image.url}">
                            <p class = "card_name">${data.name}</p>
                        </div>
                        <div class = "back">
                            <p class= "skill-item">Intelligence</p>
                            <div class="skill-container">
                                <span style = "width: ${data.powerstats.intelligence}%; 
                                animation: intelligence 2s;" class="skills"></span>
                            </div>

                            <p class= "skill-item">Strength</p>
                            <div class="skill-container">
                                <span style = "width: ${data.powerstats.strength}%; 
                                animation: strength 2s;" class="skills"></span>
                            </div>

                            <p class= "skill-item">Speed</p>
                            <div class="skill-container">
                               <span style = "width: ${data.powerstats.speed}%; 
                                animation: speed 2s;" class="skills"></span>
                            </div>

                            <p class= "skill-item">Durability</p>
                            <div class="skill-container">
                               <span style = "width: ${data.powerstats.durability}%; 
                                animation: durability 2s;" class="skills"></span>
                            </div>

                            <p class= "skill-item">Power</p>
                            <div class="skill-container">
                               <span style = "width: ${data.powerstats.power}%; 
                                animation: power 2s;" class="skills"></span>
                            </div>

                            <p class= "skill-item">Combat</p>
                            <div class="skill-container">
                               <span style = "width: ${data.powerstats.combat}%; 
                                animation: combat 2s;" class="skills"></span>
                            </div>                                                        
                        </div>
                    </div>
                </div>`
});
});

// init = () => {
// 				DOM.player1.innerHTML =  `<div id= "player-1" class="player-panel-1 col-5">                    
//                     <div class = "card">
//                         <div class = "front">
//                             <img id = "player-1" class = "card_picture" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Placeholder_male_superhero_c.png/507px-Placeholder_male_superhero_c.png">
//                             <p class = "card_name">Player 1</p>
//                         </div>
//                         <div class = "back">
//                             <p class= "skill-item">Intelligence</p>
//                             <div class="skill-container">
//                                 <span style = "width: 0%; 
//                                 animation: intelligence 8s;" class="skills"></span>
//                             </div>

//                             <p class= "skill-item">Strength</p>
//                             <div class="skill-container">
//                                 <span style = "width: 0%; 
//                                 animation: strength 2s;" class="skills"></span>
//                             </div>

//                             <p class= "skill-item">Speed</p>
//                             <div class="skill-container">
//                                <span style = "width: 0%; 
//                                 animation: speed 2s;" class="skills"></span>
//                             </div>

//                             <p class= "skill-item">Durability</p>
//                             <div class="skill-container">
//                                <span style = "width: 0%; 
//                                 animation: durability 2s;" class="skills"></span>
//                             </div>

//                             <p class= "skill-item">Power</p>
//                             <div class="skill-container">
//                                <span style = "width: 0%; 
//                                 animation: power 2s;" class="skills"></span>
//                             </div>

//                             <p class= "skill-item">Combat</p>
//                             <div class="skill-container">
//                                <span style = "width: 0%; 
//                                 animation: combat 2s;" class="skills"></span>
//                             </div>               
//                         </div>                 
//                         </div>
//                 </div>`;

//                      DOM.player2.innerHTML =  `<div id= "player-2" class="player-panel-2 col-5">
//                     <div class = "card">
//                         <div class = "front">
//                             <img id = "player-2" class = "card_picture" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Placeholder_male_superhero_c.png/507px-Placeholder_male_superhero_c.png">
//                             <p class = "card_name">Player 2</p>
//                         </div>
//                         <div class = "back">
//                             <p class= "skill-item">Intelligence</p>
//                             <div class="skill-container">
//                                 <span style = "width: 0%; 
//                                 animation: intelligence 2s;" class="skills"></span>
//                             </div>

//                             <p class= "skill-item">Strength</p>
//                             <div class="skill-container">
//                                 <span style = "width: 0%; 
//                                 animation: strength 2s;" class="skills"></span>
//                             </div>

//                             <p class= "skill-item">Speed</p>
//                             <div class="skill-container">
//                                <span style = "width: 0%; 
//                                 animation: speed 2s;" class="skills"></span>
//                             </div>

//                             <p class= "skill-item">Durability</p>
//                             <div class="skill-container">
//                                <span style = "width: 0%; 
//                                 animation: durability 2s;" class="skills"></span>
//                             </div>

//                             <p class= "skill-item">Power</p>
//                             <div class="skill-container">
//                                <span style = "width: 0%; 
//                                 animation: power 2s;" class="skills"></span>
//                             </div>

//                             <p class= "skill-item">Combat</p>
//                             <div class="skill-container">
//                                <span style = "width: 0%; 
//                                 animation: combat 2s;" class="skills"></span>
//                             </div>                                                        
//                         </div>
//                     </div>
//                 </div>`           
// 	};


//Global Controller

async function getSuperhero(id) {
	try{
		const result = await fetch(`https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/3204526612919056/${id}/`);
        const data = await result.json();
        return data;
	} catch(error){
		console.log(error);
	}
}
