//UIController

let player1, player2, btn;

let DOM = {
	player1: document.getElementById("player-1"),
	player2: document.getElementById("player-2"),
	btn: document.querySelector(".button"),
	r1_p1_total: document.querySelector(".r1-p1-total"),
	r2_p1_total: document.querySelector(".r2-p1-total"),
	r3_p1_total: document.querySelector(".r3-p1-total"),
	r1_p2_total: document.querySelector(".r1-p2-total"),
	r2_p2_total: document.querySelector(".r2-p2-total"),
	r3_p2_total: document.querySelector(".r3-p2-total")
};

let skip = [288, 101, 691, 91, 365, 515, 220, 715, 662, 22, 264, 262, 364, 481, 47, 94, 59, 698
];


DOM.btn.addEventListener("click", function() {
	let num1 = Math.floor(Math.random()*731);
	let num2 = Math.floor(Math.random()*731);

	if(num1 != skip) {
		getSuperhero(num1).then(data => {

			let powerstats = {
				intelligence: parseInt(data.powerstats.intelligence),
				strength: parseInt(data.powerstats.strength),
				speed: parseInt(data.powerstats.speed),
				durability: parseInt(data.powerstats.durability),
				power: parseInt(data.powerstats.power),
				combat: parseInt(data.powerstats.combat)
			}
			
			let total = powerstats.intelligence + powerstats.strength + powerstats.speed + 
			powerstats.durability + powerstats.power + powerstats.combat;

			console.log(`${powerstats.intelligence} + ${powerstats.strength} + ${powerstats.speed} + 
			${powerstats.durability} + ${powerstats.power} + ${powerstats.combat} = ${total}`);

			DOM.r1_p1_total.innerHTML = `<td class="r1-p1-total">${total}</td>`; 

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
    }


if (num2 != skip) {
	getSuperhero(num2).then(data => {

		let powerstats = {
				intelligence: parseInt(data.powerstats.intelligence),
				strength: parseInt(data.powerstats.strength),
				speed: parseInt(data.powerstats.speed),
				durability: parseInt(data.powerstats.durability),
				power: parseInt(data.powerstats.power),
				combat: parseInt(data.powerstats.combat)
			}
			
			let total = powerstats.intelligence + powerstats.strength + powerstats.speed + 
			powerstats.durability + powerstats.power + powerstats.combat;

			console.log(`${powerstats.intelligence} + ${powerstats.strength} + ${powerstats.speed} + 
			${powerstats.durability} + ${powerstats.power} + ${powerstats.combat} = ${total}`);

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
}

// start here
});

init = () => {
				DOM.player1.innerHTML =  `<div id= "player-1" class="player-panel-1 col-5">                    
                    <div class = "card">
                        <div class = "front">
                            <img id = "player-1" class = "card_picture" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Placeholder_male_superhero_c.png/507px-Placeholder_male_superhero_c.png">
                            <p class = "card_name">Player 1</p>
                        </div>
                        <div class = "back">
                            <p class= "skill-item">Intelligence</p>
                            <div class="skill-container">
                                <span style = "width: 0%; 
                                animation: intelligence 8s;" class="skills"></span>
                            </div>

                            <p class= "skill-item">Strength</p>
                            <div class="skill-container">
                                <span style = "width: 0%; 
                                animation: strength 2s;" class="skills"></span>
                            </div>

                            <p class= "skill-item">Speed</p>
                            <div class="skill-container">
                               <span style = "width: 0%; 
                                animation: speed 2s;" class="skills"></span>
                            </div>

                            <p class= "skill-item">Durability</p>
                            <div class="skill-container">
                               <span style = "width: 0%; 
                                animation: durability 2s;" class="skills"></span>
                            </div>

                            <p class= "skill-item">Power</p>
                            <div class="skill-container">
                               <span style = "width: 0%; 
                                animation: power 2s;" class="skills"></span>
                            </div>

                            <p class= "skill-item">Combat</p>
                            <div class="skill-container">
                               <span style = "width: 0%; 
                                animation: combat 2s;" class="skills"></span>
                            </div>               
                        </div>                 
                        </div>
                </div>`;

                     DOM.player2.innerHTML =  `<div id= "player-2" class="player-panel-2 col-5">
                    <div class = "card">
                        <div class = "front">
                            <img id = "player-2" class = "card_picture" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Placeholder_male_superhero_c.png/507px-Placeholder_male_superhero_c.png">
                            <p class = "card_name">Player 2</p>
                        </div>
                        <div class = "back">
                            <p class= "skill-item">Intelligence</p>
                            <div class="skill-container">
                                <span style = "width: 0%; 
                                animation: intelligence 2s;" class="skills"></span>
                            </div>

                            <p class= "skill-item">Strength</p>
                            <div class="skill-container">
                                <span style = "width: 0%; 
                                animation: strength 2s;" class="skills"></span>
                            </div>

                            <p class= "skill-item">Speed</p>
                            <div class="skill-container">
                               <span style = "width: 0%; 
                                animation: speed 2s;" class="skills"></span>
                            </div>

                            <p class= "skill-item">Durability</p>
                            <div class="skill-container">
                               <span style = "width: 0%; 
                                animation: durability 2s;" class="skills"></span>
                            </div>

                            <p class= "skill-item">Power</p>
                            <div class="skill-container">
                               <span style = "width: 0%; 
                                animation: power 2s;" class="skills"></span>
                            </div>

                            <p class= "skill-item">Combat</p>
                            <div class="skill-container">
                               <span style = "width: 0%; 
                                animation: combat 2s;" class="skills"></span>
                            </div>                                                        
                        </div>
                    </div>
                </div>`           
	};


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
