export class GameState {
  board: (string)[][] = [
    ['-', '-', '-', 'P', '-', '-', 'P', '-', '-', '-'],
    ['-', '-', 'W', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', 'P', '-', '-', '-'],
    ['-', '-', '-', '-', '-', 'P', '-', '-', '-', '-'],
    ['-', '-', '-', 'G', '-', '-', '-', '-', '-', '-'],
    ['W', '-', '-', '-', '-', '-', 'P', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['P', '-', '-', '-', '-', '-', '-', 'W', '-', '-'],
    ['-', '-', '-', 'P', '-', '-', 'P', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
  ]

  agentIndex = {
    row: 9,
    column: 0
  }

  // Possible knowledge values:
  // U = Unknown
  // W = Wumpus
  // P = Pit
  // G = Gold
  // A = Breeze
  // S = Stench
  // V = Safe
  // B = Both stench and breeze

  knowledge = [
    ['U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U'],
    ['U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U'],
    ['U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U'],
    ['U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U'],
    ['U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U'],
    ['U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U'],
    ['U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U'],
    ['U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U'],
    ['U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U'],
    ['V', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U']
  ]

  cellVisited = [
    [true, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false]
  ]

  nearDanger = [
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false]
  ]

  pitProbability = [
    [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
  ]

  stenchProbability = [
    [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
  ]

  threshold = 0.5;
  contiguousRandomMoveCount = 0;
  discoveredGold = 0;
  wumpusKilled = 0;

  wumpusCount = 0;
  pitCount = 0;
  goldCount = 0;

  totalMoves = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]

  UP = 0
  DOWN = 1
  LEFT = 2
  RIGHT = 3
  point = 0;
  shootDirection !: number
  moveDirection !: number

  gameOver = false
  youWin = false
  youLose = false

  busy = false

  constructor(board: (string)[][]) {
    this.board = board

    // find the number of W in board
    let wumpusCount = 0
    let pitCount = 0
    let goldCount = 0
    for (const element of this.board) {
      for (let j = 0; j < this.board.length; j++) {
        if (element[j] === 'W') wumpusCount++
        if (element[j] === 'P') pitCount++
        if (element[j] === 'G') goldCount++
        if (element[j] === '-') element[j] = 'U'
      }
    }

    this.wumpusCount = wumpusCount
    this.pitCount = pitCount
    this.goldCount = goldCount

    console.log(this.wumpusCount, this.pitCount, this.goldCount)    
  }

  counter(i: number) {
    return new Array(i);
  }

  move() {
    this.calculateBreezeAndStench();
    if (this.gameOver || this.busy) {
      return -1;
    }
    //// console.log(this.discoveredGold);
    if (this.board[this.agentIndex.row][this.agentIndex.column].includes('G')) {

      // this.goldAudio.src = "./assets/audio/goldFound.wav";
      // this.goldAudio.load();
      // this.goldAudio.play();

      this.busy = true;
      this.discoveredGold += 1;
      this.point += 1000;
      setTimeout(() => {
        this.board[this.agentIndex.row][this.agentIndex.column] = this.board[this.agentIndex.row][this.agentIndex.column].replace('G', '');

        this.busy = false;
        console.log('gold: ', this.discoveredGold)
      }, 1000);



      if (this.discoveredGold == this.goldCount) {
        console.log("Discovered gold " + this.discoveredGold)
        console.log("total gold " + this.goldCount)

        this.gameOver = true;
        // this.gameOverLine = "Congrats! You Win";
        this.youWin = true;
        // this.winAudio.src = "./assets/audio/win.mp3";
        // this.winAudio.load();
        // this.winAudio.play();
        return -1;
      }
    }
    else if (this.board[this.agentIndex.row][this.agentIndex.column] == 'W' || this.board[this.agentIndex.row][this.agentIndex.column] == 'P') {
      this.point -= 10000;
      this.gameOver = true;
      this.youLose = true;
      // this.gameOverLine = "Game Over! You Lose";
      if (this.board[this.agentIndex.row][this.agentIndex.column] == 'W') {
        // this.monsterEndAudio.src = "./assets/audio/monster.wav";
        // this.monsterEndAudio.load();
        // this.monsterEndAudio.play();
      }
      else {
        // this.pitEndAudio.src = "./assets/audio/pit.wav";
        // this.pitEndAudio.load();
        // this.pitEndAudio.play();
      }
      return -1;
    }

    //we are close to wumpus
    else if (this.wumpusCount > this.wumpusKilled && this.isWumpusClose()) {
      console.log('shoot');
      this.wumpusKilled += 1;
      if (this.shootDirection == this.UP) {
        this.board[this.agentIndex.row][this.agentIndex.column + 1] = this.board[this.agentIndex.row][this.agentIndex.column + 1].replace('W', '');
        if (this.board[this.agentIndex.row][this.agentIndex.column + 1] == '') {
          this.board[this.agentIndex.row][this.agentIndex.column + 1] = 'S'
        }
        this.removeStench(this.agentIndex.row, this.agentIndex.column + 1);
      } else if (this.shootDirection == this.DOWN) {
        this.board[this.agentIndex.row][this.agentIndex.column - 1] = this.board[this.agentIndex.row][this.agentIndex.column - 1].replace('W', '');
        if (this.board[this.agentIndex.row][this.agentIndex.column - 1] == '') {
          this.board[this.agentIndex.row][this.agentIndex.column - 1] = 'S'
        }
        this.removeStench(this.agentIndex.row, this.agentIndex.column - 1);
      } else if (this.shootDirection == this.LEFT) {
        this.board[this.agentIndex.row - 1][this.agentIndex.column] = this.board[this.agentIndex.row - 1][this.agentIndex.column].replace('W', '');
        if (this.board[this.agentIndex.row - 1][this.agentIndex.column] == '') {
          this.board[this.agentIndex.row - 1][this.agentIndex.column] = 'S'
        }
        this.removeStench(this.agentIndex.row - 1, this.agentIndex.column);
      } else if (this.shootDirection == this.RIGHT) {
        this.board[this.agentIndex.row + 1][this.agentIndex.column] = this.board[this.agentIndex.row + 1][this.agentIndex.column].replace('W', '');
        if (this.board[this.agentIndex.row + 1][this.agentIndex.column] == '') {
          this.board[this.agentIndex.row + 1][this.agentIndex.column] = 'S'
        }
        this.removeStench(this.agentIndex.row + 1, this.agentIndex.column);
      }

      // this.wumpusAudio.src = "./assets/audio/wumpusKill.wav";
      // this.wumpusAudio.load();
      // this.wumpusAudio.play();


      return -1;
    }

    else if (this.areWeInPitLoop()) {
      console.log("pit loop");
      if (this.agentIndex.row != 9 && this.pitProbability[this.agentIndex.row + 1][this.agentIndex.column] < this.threshold) {
        this.contiguousRandomMoveCount = 0;
        return this.RIGHT;
      } else if (this.agentIndex.column != 9 && this.pitProbability[this.agentIndex.row][this.agentIndex.column + 1] < this.threshold) {
        this.contiguousRandomMoveCount = 0;
        return this.UP;
      } else if (this.agentIndex.row != 0 && this.pitProbability[this.agentIndex.row - 1][this.agentIndex.column] < this.threshold) {
        this.contiguousRandomMoveCount = 0;
        return this.LEFT;
      } else {
        this.contiguousRandomMoveCount = 0;
        return this.DOWN;
      }
    }
    else if (this.isItDangerCell()) {
      console.log("danger space");
      // if left is safe, move there
      if (this.agentIndex.row != 0 && this.cellVisited[this.agentIndex.row - 1][this.agentIndex.column]) {
        this.totalMoves[this.agentIndex.row - 1][this.agentIndex.column]++;
        return this.LEFT;
      }
      // if down is safe, move there
      else if (this.agentIndex.column != 0 && this.cellVisited[this.agentIndex.row][this.agentIndex.column - 1]) {
        this.totalMoves[this.agentIndex.row][this.agentIndex.column - 1]++;
        return this.DOWN;
      }
      // if right is safe, move there
      else if (this.agentIndex.row != 9 && this.cellVisited[this.agentIndex.row + 1][this.agentIndex.column]) {
        this.totalMoves[this.agentIndex.row + 1][this.agentIndex.column]++;
        return this.RIGHT;
      }
      // if up is safe, move there
      else if (this.agentIndex.column != 9 && this.cellVisited[this.agentIndex.row][this.agentIndex.column + 1]) {
        this.totalMoves[this.agentIndex.row][this.agentIndex.column + 1]++;
        return this.UP;
      }
    }
    else if (!this.isItDangerCell()) {
      console.log("free space");
      // if right is not visited, move there
      if (this.agentIndex.row != 9 && !this.cellVisited[this.agentIndex.row + 1][this.agentIndex.column]) {
        this.cellVisited[this.agentIndex.row + 1][this.agentIndex.column] = true;
        this.totalMoves[this.agentIndex.row + 1][this.agentIndex.column]++;
        return this.RIGHT;
      }
      // if up is not visited, move there
      else if (this.agentIndex.column != 9 && !this.cellVisited[this.agentIndex.row][this.agentIndex.column + 1]) {
        this.cellVisited[this.agentIndex.row][this.agentIndex.column + 1] = true;
        this.totalMoves[this.agentIndex.row][this.agentIndex.column + 1]++;
        return this.UP;
      }
      // if left is not visited, move there
      else if (this.agentIndex.row != 0 && !this.cellVisited[this.agentIndex.row - 1][this.agentIndex.column]) {
        this.cellVisited[this.agentIndex.row - 1][this.agentIndex.column] = true;
        this.totalMoves[this.agentIndex.row - 1][this.agentIndex.column]++;
        return this.LEFT;
      }
      // if down is not visited, move there
      else if (this.agentIndex.column != 0 && !this.cellVisited[this.agentIndex.row][this.agentIndex.column - 1]) {
        this.cellVisited[this.agentIndex.row][this.agentIndex.column - 1] = true;
        this.totalMoves[this.agentIndex.row][this.agentIndex.column - 1]++;
        return this.DOWN;
      }
      // if all neighbor have been visited, choose random direction
      else {
        console.log("free neighbor");
        while (true) {
          switch (this.rand(1, 4)) {
            //if selected, move right
            case 1:
              if (this.agentIndex.row != 9) {
                this.totalMoves[this.agentIndex.row + 1][this.agentIndex.column]++;

                this.contiguousRandomMoveCount++;
                return this.RIGHT;
              }
              break;
            //if selected, move up
            case 2:
              if (this.agentIndex.column != 9) {
                this.totalMoves[this.agentIndex.row][this.agentIndex.column + 1]++;

                this.contiguousRandomMoveCount++;
                return this.UP;
              }
              break;
            //if selected, move left
            case 3:
              if (this.agentIndex.row != 0) {
                this.totalMoves[this.agentIndex.row - 1][this.agentIndex.column]++;

                this.contiguousRandomMoveCount++;
                return this.LEFT;
              }
              break;
            //if selected, move down
            case 4:
              if (this.agentIndex.column != 0) {
                this.totalMoves[this.agentIndex.row][this.agentIndex.column - 1]++;
                this.contiguousRandomMoveCount++;
                return this.DOWN;
              }
              break;
          }
        }
      }
    }
    return -1;
  }

  removeStench(row: number, column: number){
    console.log('calleddd')
    if(row!=0){
      this.board[row-1][column] = this.board[row-1][column].replace('stench', 'S');
      this.stenchProbability[this.agentIndex.row-1][this.agentIndex.column] = 0.0
    }
    if(row!=9){
      this.board[row+1][column] = this.board[row+1][column].replace('stench', 'S');
      this.stenchProbability[this.agentIndex.row+1][this.agentIndex.column] = 0.0
      
    }
    if(column!=0){
      this.board[row][column-1] = this.board[row][column-1].replace('stench', 'S');
      this.stenchProbability[this.agentIndex.row][this.agentIndex.column-1] = 0.0
    
    }
    if(column!=9){
      this.board[row][column+1] = this.board[row][column+1].replace('stench', 'S');
      this.stenchProbability[this.agentIndex.row][this.agentIndex.column+1] = 0.0
    }
  }


  rand(min:number, max:number) {
    if (min == max)
        return min;

    var date = new Date();
    var count = date.getMilliseconds() % 10;

    for (var i = 0; i <= count; ++i)
        Math.random();

    if (min > max) {
        min ^= max;
        max ^= min;
        min ^= max;
    }

    return Math.floor((Math.random() * (max - min + 1)) + min);
}

  areWeInPitLoop() {
    if (this.contiguousRandomMoveCount > 0 && this.totalMoves[this.agentIndex.row][this.agentIndex.column] > 1 && this.board[this.agentIndex.row][this.agentIndex.column].includes('breeze'))
        return true;
    else
        return false;
  }


  isItDangerCell(){
    if(this.board[this.agentIndex.row][this.agentIndex.column].includes('breeze') || this.board[this.agentIndex.row][this.agentIndex.column].includes('stench')){
      return true;
    }
    return false;
  }

  isWumpusClose(){
    if(this.agentIndex.column!=9 && this.stenchProbability[this.agentIndex.row][this.agentIndex.column+1]>0.5){
      this.shootDirection = this.UP;
      return true;
    }
    if(this.agentIndex.column!=0 && this.stenchProbability[this.agentIndex.row][this.agentIndex.column-1]>0.5){
      this.shootDirection = this.DOWN;
      return true;
    }
    if(this.agentIndex.row!=9 && this.stenchProbability[this.agentIndex.row+1][this.agentIndex.column]>0.5){
      this.shootDirection = this.RIGHT;
      return true;
    }
    if(this.agentIndex.row!=0 && this.stenchProbability[this.agentIndex.row-1][this.agentIndex.column]>0.5){
      this.shootDirection = this.LEFT;
      return true;
    }
    return false;
  }

  calculateBreezeAndStench(){
    if(!this.nearDanger[this.agentIndex.row][this.agentIndex.column]){
      //// console.log(this.board)
      //// console.log(this.agentIndex.row, ' ', this.agentIndex.column)

      //// console.log(this.board[this.agentIndex.row][this.agentIndex.column])

      if(this.board[this.agentIndex.row][this.agentIndex.column].includes('breeze')){
        this.updatePitWumpusPercentage(true, false);
      }

      if(this.board[this.agentIndex.row][this.agentIndex.column].includes('stench')){
        this.updatePitWumpusPercentage(false, true);
      }
    }
  }

  updatePitWumpusPercentage(pit:boolean, wumpus: boolean){
    if(this.agentIndex.column!=9 && !this.cellVisited[this.agentIndex.row][this.agentIndex.column+1]){
      if(pit){
        this.pitProbability[this.agentIndex.row][this.agentIndex.column+1]+=0.25
      }
      if(wumpus){
        this.stenchProbability[this.agentIndex.row][this.agentIndex.column+1]+=0.25
      }
    }
    if(this.agentIndex.row!=0 && !this.cellVisited[this.agentIndex.row-1][this.agentIndex.column]){
      if(pit){
        this.pitProbability[this.agentIndex.row-1][this.agentIndex.column]+=0.25
      }
      if(wumpus){
        this.stenchProbability[this.agentIndex.row-1][this.agentIndex.column]+=0.25
      }
    }
    if(this.agentIndex.row!=9 && !this.cellVisited[this.agentIndex.row+1][this.agentIndex.column]){
      if(pit){
        this.pitProbability[this.agentIndex.row+1][this.agentIndex.column]+=0.25
      }
      if(wumpus){
        this.stenchProbability[this.agentIndex.row+1][this.agentIndex.column]+=0.25
      }
    }
    if(this.agentIndex.column!=0 && !this.cellVisited[this.agentIndex.row][this.agentIndex.column-1]){
      if(pit){
        this.pitProbability[this.agentIndex.row][this.agentIndex.column-1]+=0.25
      }
      if(wumpus){
        this.stenchProbability[this.agentIndex.row][this.agentIndex.column-1]+=0.25
      }
    }
    this.nearDanger[this.agentIndex.row][this.agentIndex.column] = true;
  }

  checkWhereAgentIs(row: number, column: number):boolean{
    if(this.agentIndex.row==row && this.agentIndex.column==column){
      return true;
    }
    return false;
  }

  checkDoorState(row: number, column: number):string{
    if(this.board[row][column].includes('G') && this.cellVisited[row][column]==true){
      return 'gold';
    }
    else if(this.board[row][column]=='S' && this.cellVisited[row][column]==false){
      return 'notvisited';
    }
    else if(this.board[row][column]=='S' && this.cellVisited[row][column]==true){
      return 'safe';
    }
    else if(this.board[row][column]=='W' && this.cellVisited[row][column]==true ){
      //// console.log('Wumpusss');
      return 'wumpus';
    }
    else if(this.board[row][column]=='P' && this.cellVisited[row][column]==true){
      //// console.log('Pittt');
      return 'pit';
    }
    else if(this.board[row][column].includes('stench') && this.cellVisited[row][column]==true){
      return 'stench';
    }
    else if(this.board[row][column].includes('breeze') && this.cellVisited[row][column]==true){
      return 'breeze';
    }
    
    return 'notvisited';
  }
}