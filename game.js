const resultPrint = document.querySelector('.js-result');
const score = JSON.parse(localStorage.getItem('score')) || {
    ties: 0,
    wins: 0,
    losses: 0
};
function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    resultPrint.innerHTML = 'Your scores are reseted';
    localStorage.removeItem('score');
    document.querySelector('.storage').innerHTML = `wins: ${score.wins}, lossses: ${score.losses}, ties: ${score.ties}`
}
function computerMove() {
    computerchoice = '';
    const temp = Math.random();
    if (temp >= 0 && temp < 1 / 3)
        computerchoice = 'Paper';
    else if (temp >= 1 / 3 && temp < 2 / 3)
        computerchoice = 'Rock';
    else if (temp >= 2 / 3)
        computerchoice = 'Scissors';
    return computerchoice;
}

function playGame(userChoice) {
    const ComputerChoice = computerMove();
    let result = '';
    if (userChoice === 'Rock') {
        if (ComputerChoice === 'Scissors')
            result = 'win';
        if (ComputerChoice === 'Rock')
            result = 'tie';
        if (ComputerChoice === 'Paper')
            result = 'lose';
    }

    if (userChoice === 'Paper') {
        if (ComputerChoice === 'Scissors')
            result = 'lose';
        if (ComputerChoice === 'Rock')
            result = 'win';
        if (ComputerChoice === 'Paper')
            result = 'tie';
    }

    if (userChoice === 'Scissors') {
        if (ComputerChoice === 'Scissors')
            result = 'tie';
        if (ComputerChoice === 'Rock')
            result = 'lose'
        if (ComputerChoice === 'Paper')
            result = 'win';
    }
    if (result === 'win') {
        score.wins += 1;
    }
    else if (result === 'lose') {
        score.losses += 1;
    } else
        score.ties += 1;
        localStorage.setItem('score', JSON.stringify(score)); 
        document.querySelector('.js-result').innerHTML = result;
        document.querySelector('.storage').innerHTML = `wins: ${score.wins}, lossses: ${score.losses}, ties: ${score.ties}`
        document.querySelector('.notification').innerHTML = `You <img class="img" src="Rock Paper Scissors_files/${userChoice}-emoji.png">  <img class="img" src="Rock Paper Scissors_files/${computerchoice}-emoji.png"> Computer 
</p>`
  

}





