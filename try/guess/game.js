let random=Math.floor(Math.random()*100+1);
let cnt=1;
let guess=[];

const guessField=document.getElementById('guessField');
const submitGuess=document.getElementById('submitGuess');
const prevGuesses=document.getElementById('prevGuesses');
const result=document.getElementById('result');
const hint=document.getElementById('hint');
const restart=document.getElementById('restart');

submitGuess.addEventListener('click',checkGuess);
restart.addEventListener('click',restartGame);

function checkGuess(){
    const userGuess=Number(guessField.value);
    if(userGuess<1||userGuess>100||!userGuess){
        result.textContext="请输入1到100之间的数字";
        return;
    }
    guess.push(userGuess);
    prevGuesses.textContent="你猜过了"+guess.join(",");
    if(userGuess===random&&cnt!==5){
        result.textContent="恭喜你，猜对了！";
        hint.textContent = "";
        setGameOver();
    }else if(userGuess<random&&cnt!==5){
        hint.textContent="猜小了";
        cnt++;
    }else if(userGuess>random&&cnt!==5){
        hint.textContent="猜大了";
        cnt++;
    }else if(cnt===5){
        result.textContent="游戏结束，你输了！";
        hint.textContent="正确答案是"+random;
        setGameOver();
    }
    guessField.value="";
    guessField.focus();
}

function setGameOver(){
    guessField.disabled=true;
    submitGuess.disabled = true;
    restart.classList.remove('hidden');
}

function resetGame() {
    guessCount = 1;
    guesses = [];
    randomNumber = Math.floor(Math.random() * 100) + 1;
  
    result.textContent = "";
    hint.textContent = "";
    prevGuesses.textContent = "";
  
    guessField.disabled = false;
    submitGuess.disabled = false;
    guessField.value = "";
    guessField.focus();
  
    restart.classList.add("hidden");
  }
  