const input = document.getElementById("input")
const output = document.getElementById("output")
const randomValue = Math.round(Math.random() * 10 )
const btn = document.getElementById("btn")
const chance = document.getElementById("chance")
let draws = 3

    function guesser(){
        const userValue = input.value
        draws --;
        if(draws == 0){
            output.innerHTML = "You failed to guess!"
            input.disabled = true
            btn.disabled = true
            chance.innerHTML = `Chances Left: ${draws}`
            return;
        }
        if(userValue > randomValue){
            output.innerHTML = "Your Guess is high"
            chance.innerHTML = `Chances Left: ${draws}`

        }
        else if(userValue < randomValue){
            output.innerHTML = "Your Guess is low"
            chance.innerHTML = `Chances Left: ${draws}`

        }
        else {
            output.innerHTML = "Your Guess is correct"
            output.style.backgroundColor = "green"
            output.style.color = "white" 
        }
    }
    console.log(`Random Nummber : ${randomValue}`);
    console.log(`Draws Left : ${draws}`);

