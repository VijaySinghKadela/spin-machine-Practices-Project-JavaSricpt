//1. despot some money
//2. Determine number of lines to bet on
//3. Collect a bet amount
//4. spin the slot machine
//5. check if the user won
//6. give the user their winnings
//7. play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
  "A": 2,
  "B": 4,
  "C": 6,
  "D": 8,
};

const SYMBOLS_VALUES = {
   "A": 5,
  "B": 4,
  "C": 3,
  "D": 2,
}



const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("invalid Deposit Amount , try again.");
    } else {
      return numberDepositAmount;
    }
  }
};

const getNumberOflines = () => {
  while (true) {
    const lines = prompt("Enter the number of lines to bet on (1-3): ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("invalid number of lines, try again.");
    } else {
      return numberOfLines;
    }
  }};

const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt("Enter the bet per line: ");
    const numberBet = parseFloat(bet);

    if (isNaN(numberBet) || numberBet <= 0 || (numberBet / lines)) {
      console.log("invalid bet, try again.");
    } else {
      return numberBet;
    }
  }
};

const spin = () =>{
   const symbols = [];
   for (const [symbol,count] of Object.entries(SYMBOLS_COUNT)){
      for(let i = 0; i < count; i++){
         symbols.push(symbol)
      }
   }

   const reels = [[],[],[]];
   for(let i = 0; i < COLS;i++ ){
    reels.push([])
      const reelSymbols = [...symbols]
      for(let j = 0; j < ROWS; j++){
         const randomIndex = Math.floor(Math.random() * reelSymbols.length);
         const selectedSymbol = reelSymbols[randomIndex];
         reels[i].push(selectedSymbol);
         reelSymbols.splice(randomIndex,1)
      }
   }
   return reels

}

  const transpose = (reels) =>{
    const rows = []
    for (let i = 0; i < ROWS; i++ ){
      rows.push([])
      for(let j = 0 ; j < COLS;j++ ){
        rows[i].push(reels[j][i])
      }

    }
    return rows
  }






let balance = deposit();
const numberOfLines = getNumberOflines();
const bet = getBet(balance, numberOfLines);
const reels = spin();
const rows = transpose(reels);
console.log(rows);
console.log(reels);