let elements = document.getElementsByClassName('borders');

for (let i = 0; i < elements.length; i++) { 
    // Add hover
    let getBg = elements[i].querySelector('.bg-white-color');
    elements[i].addEventListener("mouseover", function () {
        getBg ? getBg.style.backgroundColor = "#FFF" : '';
    });

    elements[i].addEventListener("mouseout", function () {
        getBg ? getBg.style.backgroundColor = "#e0e0e0" : '';
    });

    // Game Button clicked
    let button = elements[i].querySelector('img'); console.log()
    elements[i].addEventListener("click", function () {
        button.getAttribute('class') ? gameTime(button.getAttribute('class')) : '';
    });
} 

let [player, cpu] = document.querySelector('.results').lastElementChild.children; 

player.querySelector('.score_field').innerText = localStorage.getItem('playerScore') ?? 0 ;

cpu.querySelector('.score_field').innerText = localStorage.getItem('cpuScore') ?? 0;

document.querySelector('.reset').addEventListener('click', function(){
    localStorage.removeItem('playerScore');
    localStorage.removeItem('cpuScore');
    cpu.querySelector('.score_field').innerText = 0; 
    player.querySelector('.score_field').innerText = 0
})

function gameTime(button) {
    let btnName = ['paper', 'scissors', 'rock']

    let cpuBtn = Math.floor(Math.random() *  btnName.length)
    
    let cpuChoice = btnName[cpuBtn];

    if (button === 'paper' && cpuChoice === 'rock' ||
        button === 'rock' && cpuChoice === 'scissors' ||
        button === 'scissors' && cpuChoice === 'paper') {
        var text = 'You win! The CPU chose ' + cpuChoice + '.';
        gameScore(player)
    } else if (button === cpuChoice) {
        var text = "It's a draw!";
    } else {
        var text = 'You lose! The CPU chose ' + cpuChoice + '.';
        gameScore(cpu)
    }
    text ? gameResult(text) : '';
}

function gameResult(text) {
    let main = document.querySelector('main'); 
    let game = main.querySelector('.play-time')
    let result = main.querySelector('.play-result');
    game.classList.add('d-none');
    result.classList.remove('d-none');
    result.querySelector('h1').innerText = text;

    result.querySelector('button').addEventListener('click', function () {
        game.classList.remove('d-none')
        result.classList.add('d-none');
    })
}

function gameScore(winner) {
    
    if (winner.classList == 'player') {
        let playerScore = parseFloat(winner.querySelector('.score_field').innerText); 
        playerScore++; 
        winner.querySelector('.score_field').innerText = playerScore;
        localStorage.setItem("playerScore", winner.querySelector('.score_field').innerText);
    } else {
        let cpuScore = parseFloat(winner.querySelector('.score_field').innerText)
        cpuScore++
        winner.querySelector('.score_field').innerText = cpuScore
        localStorage.setItem("cpuScore", winner.querySelector('.score_field').innerText);
    }

}