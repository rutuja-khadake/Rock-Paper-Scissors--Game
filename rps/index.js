setTimeout(()=>{
    document.body.classList.remove("preload");

},500);

 
  

const OPTION = [
    {
      name: "paper",
      beats: "rock",
    },
    {
      name: "scissors",
      beats: "paper",
    },
    {
      name: "rock",
      beats: "scissors",
    },
  ];
  const optionButtons = document.querySelectorAll(".option-btn");
  const gameDiv = document.querySelector(".game");
  const resultsDiv = document.querySelector(".results");
  const resultDivs = document.querySelectorAll(".results__result");
  
  const resultWinner = document.querySelector(".results__winner");
  const resultText = document.querySelector(".results__text");
  
  const playAgainBtn = document.querySelector(".play-again");
  
  const scoreNumber = document.querySelector(".score__number");
  let score = 0;
  
  // Game Logic
  optionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const optionName = button.dataset.option;
      const option =OPTION .find((option) => option.name === optionName);
      choose(option);
    });
  });
  
  function choose(option) {
    const aioption = aiChoose();
    displayResults([option, aioption]);
    displayWinner([option, aioption]);
  }
  
  function aiChoose() {
    const rand = Math.floor(Math.random() * OPTION.length);
    return OPTION[rand];
  }
  function displayResults(results) {
    resultDivs.forEach((resultDiv, idx) => {
      setTimeout(() => {
        resultDiv.innerHTML = `
          <div class="option ${results[idx].name}">
            <img src="img/-${results[idx].name}.svg" alt="${results[idx].name}" />
          </div>
        `;
      }, idx * 1000);
    });
  
    gameDiv.classList.toggle("hidden");
    resultsDiv.classList.toggle("hidden");
  }
  
    
  function displayWinner(results) {
    setTimeout(() => {
      const userWins = isWinner(results);
      const aiWins = isWinner(results);
  
      if (userWins) {
        resultText.innerText ="YOU WIN ";
        resultDivs[0].classList.toggle("winner");
        keepScore(1);
      } else if (aiWins) {
        resultText.innerText = "YOU LOST ";
        resultDivs[1].classList.toggle("winner");
        keepScore(-1);
      } else {
        resultText.innerText = "TIE UP";
      }
      resultWinner.classList.toggle("hidden");
      resultsDiv.classList.toggle("show-winner");
    }, 1000);
  }
  
  function isWinner(results) {
    return results[0].beats === results[1].name;
  }
  
  function keepScore(point) {
    score += point;
    scoreNumber.innerText = score;
  }
  // Play Again
  playAgainBtn.addEventListener("click", () => {
    gameDiv.classList.toggle("hidden");
    resultsDiv.classList.toggle("hidden");
  
    resultDivs.forEach((resultDiv) => {
      resultDiv.innerHTML = "";
      resultDiv.classList.remove("winner");
    });
  
    resultText.innerText = "";
    resultWinner.classList.toggle("hidden");
    resultsDiv.classList.toggle("show-winner");
  });

 function togglePopup(){
   document.getElementById("popup-1").classList.toggle("active");
 }


  function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }


  