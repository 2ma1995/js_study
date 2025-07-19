const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';


let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
        alert(`잘못된 선택입니다! 기본값은 ${DEFAULT_USER_CHOICE}로 설정됩니다.`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
};

const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => {
    return cChoice === pChoice
        ? RESULT_DRAW
        : (cChoice === ROCK && pChoice === PAPER) ||
        (cChoice === PAPER && pChoice === SCISSORS) ||
        (cChoice === SCISSORS && pChoice === ROCK)
            ? RESULT_PLAYER_WINS
            : RESULT_COMPUTER_WINS;

    // if (cChoice === pChoice) {
    //     return RESULT_DRAW
    // } else if ((cChoice === ROCK && pChoice === PAPER) || (cChoice === PAPER && pChoice === SCISSORS) || (cChoice === PAPER && pChoice === SCISSORS)) {
    //     return RESULT_PLAYER_WINS;
    // } else {
    //     return RESULT_COMPUTER_WINS;
    // }
};

startGameBtn.addEventListener('click', () => {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('game is starting');
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    let winner;
    if (playerChoice) {
        winner = getWinner(computerChoice, playerChoice);
    } else {
        winner = getWinner(computerChoice);
    }
    let message = `당신의 선택 : ${playerChoice || DEFAULT_USER_CHOICE}, 컴퓨터 선택 : ${computerChoice}`;
    if (winner === RESULT_DRAW) {
        message = message + ' 비겼습니다.';
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + ' 플레이어가 이겼습니다.';
    } else {
        message = message + ' 플레이어가 졌습니다.';
    }
    alert(message);
    gameIsRunning = false;
});

// 게임과 상관없음
// rest매개변수
// 항상 마지막에 사용이 되어야함.
const combine = (resultHandler, operation, ...numbers) => {
    const validateNumber = (number) => {
        return isNaN(number) ? 0 : number;
    };

    let sum = 0;
    for (const num of numbers) {
        if (operation === 'ADD') {
            sum += validateNumber(num);
        } else {
            sum -= validateNumber(num);
        }
    }
    resultHandler(sum, "모든 수 를 더한값은 ");
};

//es6 rest매개변수 생기기전 활용방법(사용x)
// const subtractUp = function (resultHandler, ...numbers) {
//     let sum = 0;
//     for (const num of numbers) {
//         sum += num;
//     }
//     resultHandler(sum, "모든 수 를 더한값은 ");
// };
//콜백함수
const showResult = (messageText, result) => {
    alert(messageText + ' ' + result);
}


combine(showResult.bind(this, '모든숫자를 더한 값의 결과는 : '), 'ADD', 1, 5, 'fdsa', -3, 6, 10);
combine(showResult.bind(this, '모든숫자를 더한 값의 결과는 : '), 'ADD', 1, 5, 10, -3, 6, 10, 25, 88);
combine(showResult.bind(this, '모든숫자를 뺀 값의 결과는 : '), 'SUBTRACT', 1, 10, 15, 20);