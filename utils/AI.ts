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
  // G = Gold
  // S = Safe
  // W = Wumpus
  // P = Pit
  // stench = stench
  // breeze = breeze
  // notvisited = not visited

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
    ['S', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U']
  ]

  cellVisited = [
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [true, false, false, false, false, false, false, false, false, false]
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

  wumpusProbability = [
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

  cboard = [
    ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'],
    ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'],
    ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'],
    ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'],
    ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'],
    ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'],
    ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'],
    ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'],
    ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'],
    ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S']
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
  point = 0
  shootDirection !: number
  moveDirection !: number

  gameOver = false
  youWin = false
  youLose = false

  busy = false

  constructor(board: (string)[][]) {
    this.board = board

    let wumpusCount = 0
    let pitCount = 0
    let goldCount = 0
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        if (this.board[row][col] === 'W') {
          wumpusCount++
          if (col != 0)
            if (this.board[row][col - 1] == 'breeze')
              this.board[row][col - 1] = 'stenchbreeze'
            else
              this.board[row][col - 1] = 'stench'
          if (col != 9)
            if (this.board[row][col + 1] == 'breeze')
              this.board[row][col + 1] = 'stenchbreeze'
            else
              this.board[row][col + 1] = 'stench'
          if (row != 0)
            if (this.board[row - 1][col] == 'breeze')
              this.board[row - 1][col] = 'stenchbreeze'
            else
              this.board[row - 1][col] = 'stench'
          if (row != 9)
            if (this.board[row + 1][col] == 'breeze')
              this.board[row + 1][col] = 'stenchbreeze'
            else
              this.board[row + 1][col] = 'stench'
        }
        if (this.board[row][col] === 'P') {
          pitCount++
          if (col != 0)
            if (this.board[row][col - 1] == 'stench')
              this.board[row][col - 1] += 'breeze'
            else
              this.board[row][col - 1] = 'breeze'
          if (col != 9)
            if (this.board[row][col + 1] == 'stench')
              this.board[row][col + 1] += 'breeze'
            else
              this.board[row][col + 1] = 'breeze'
          if (row != 0)
            if (this.board[row - 1][col] == 'stench')
              this.board[row - 1][col] += 'breeze'
            else
              this.board[row - 1][col] = 'breeze'
          if (row != 9)
            if (this.board[row + 1][col] == 'stench')
              this.board[row + 1][col] += 'breeze'
            else
              this.board[row + 1][col] = 'breeze'
        }
        if (this.board[row][col] === '-') 
          this.board[row][col] = 'S'
        if (this.board[row][col] === 'G') {
          goldCount++
          this.board[row][col] = 'SG'
        }
        
      }
    }

    this.cboard = JSON.parse(JSON.stringify(this.board))
    this.wumpusCount = wumpusCount
    this.pitCount = pitCount
    this.goldCount = goldCount
  }

  counter(i: number) {
    return new Array(i);
  }

  cheatCounter(i: number) {
    return new Array(i);
  }

  move() {
    this.calculateBreezeAndStench();
    if (this.gameOver || this.busy) {
      return -1;
    }
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
      }, 1000);



      if (this.discoveredGold == this.goldCount) {
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
      this.wumpusKilled += 1;
      if (this.shootDirection == this.RIGHT) {
        this.board[this.agentIndex.row][this.agentIndex.column + 1] = this.board[this.agentIndex.row][this.agentIndex.column + 1].replace('W', '');
        if (this.board[this.agentIndex.row][this.agentIndex.column + 1] == '') {
          this.board[this.agentIndex.row][this.agentIndex.column + 1] = 'S'
        }
        this.removeStench(this.agentIndex.row, this.agentIndex.column + 1);
      } else if (this.shootDirection == this.LEFT) {
        this.board[this.agentIndex.row][this.agentIndex.column - 1] = this.board[this.agentIndex.row][this.agentIndex.column - 1].replace('W', '');
        if (this.board[this.agentIndex.row][this.agentIndex.column - 1] == '') {
          this.board[this.agentIndex.row][this.agentIndex.column - 1] = 'S'
        }
        this.removeStench(this.agentIndex.row, this.agentIndex.column - 1);
      } else if (this.shootDirection == this.UP) {
        this.board[this.agentIndex.row - 1][this.agentIndex.column] = this.board[this.agentIndex.row - 1][this.agentIndex.column].replace('W', '');
        if (this.board[this.agentIndex.row - 1][this.agentIndex.column] == '') {
          this.board[this.agentIndex.row - 1][this.agentIndex.column] = 'S'
        }
        this.removeStench(this.agentIndex.row - 1, this.agentIndex.column);
      } else if (this.shootDirection == this.DOWN) {
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
      // first move to a random index where pit prob is less than threshold
      const lessThresholdRandomDirections: number[] = [];
      if (
        this.agentIndex.row < 9 &&
        this.pitProbability[this.agentIndex.row + 1][this.agentIndex.column] <
          this.threshold
      ) {
        lessThresholdRandomDirections.push(this.DOWN);
      }
      if (
        this.agentIndex.column < 9 &&
        this.pitProbability[this.agentIndex.row][this.agentIndex.column + 1] <
          this.threshold
      ) {
        lessThresholdRandomDirections.push(this.RIGHT);
      }
      if (
        this.agentIndex.row > 0 &&
        this.pitProbability[this.agentIndex.row - 1][this.agentIndex.column] <
          this.threshold
      ) {
        lessThresholdRandomDirections.push(this.UP);
      }
      if (
        this.agentIndex.column > 0 &&
        this.pitProbability[this.agentIndex.row][this.agentIndex.column - 1] <
          this.threshold
      ) {
        lessThresholdRandomDirections.push(this.LEFT);
      }

      if (lessThresholdRandomDirections.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * lessThresholdRandomDirections.length
        );
        const randomDirection = lessThresholdRandomDirections[randomIndex];
        // update the total moves and return the chosen direction
        switch (randomDirection) {
          case this.LEFT:
            this.contiguousRandomMoveCount = 0;
            return this.LEFT;
          case this.RIGHT:
            this.contiguousRandomMoveCount = 0;
            return this.RIGHT;
          case this.UP:
            this.contiguousRandomMoveCount = 0;
            return this.UP;
          case this.DOWN:
            this.contiguousRandomMoveCount = 0;
            return this.DOWN;
        }
      } else {
        // move to a random index
        /**** Lastly, move randomly ****/
        const randomDirections: number[] = [];
        if (this.agentIndex.row > 0) {
          randomDirections.push(this.UP);
        }
        if (this.agentIndex.column > 0) {
          randomDirections.push(this.LEFT);
        }
        if (this.agentIndex.row < 9) {
          randomDirections.push(this.DOWN);
        }
        if (this.agentIndex.column < 9) {
          randomDirections.push(this.RIGHT);
        }

        if (randomDirections.length > 0) {
          const randomIndex = Math.floor(
            Math.random() * randomDirections.length
          );
          const randomDirection = randomDirections[randomIndex];
          // update the total moves and return the chosen direction
          switch (randomDirection) {
            case this.LEFT:
              this.contiguousRandomMoveCount = 0;
              return this.LEFT;
            case this.RIGHT:
              this.contiguousRandomMoveCount = 0;
              return this.RIGHT;
            case this.UP:
              this.contiguousRandomMoveCount = 0;
              return this.UP;
            case this.DOWN:
              this.contiguousRandomMoveCount = 0;
              return this.DOWN;
          }
        }
      }
    }

    else if (this.isItDangerCell()) {
      console.log("danger space");
      // ***** Firstly we will backtrack to already visited cells *****//
      // Create an array to store available directions
      const visitedAvailableDirections: number[] = [];

      // Check if up is safe and add it to available directions
      if (
        this.agentIndex.row > 0 &&
        this.cellVisited[this.agentIndex.row - 1][this.agentIndex.column]
      ) {
        if (
          this.totalMoves[this.agentIndex.row - 1][this.agentIndex.column] < 15
        )
          visitedAvailableDirections.push(this.UP);
      }

      // Check if left is safe and add it to available directions
      if (
        this.agentIndex.column > 0 &&
        this.cellVisited[this.agentIndex.row][this.agentIndex.column - 1]
      ) {
        if (
          this.totalMoves[this.agentIndex.row][this.agentIndex.column - 1] < 15
        )
          visitedAvailableDirections.push(this.LEFT);
      }

      // Check if down is safe and add it to available directions
      if (
        this.agentIndex.row < 9 &&
        this.cellVisited[this.agentIndex.row + 1][this.agentIndex.column]
      ) {
        if (
          this.totalMoves[this.agentIndex.row + 1][this.agentIndex.column] < 15
        )
          visitedAvailableDirections.push(this.DOWN);
      }

      // Check if right is safe and add it to available directions
      if (
        this.agentIndex.column < 9 &&
        this.cellVisited[this.agentIndex.row][this.agentIndex.column + 1]
      ) {
        if (
          this.totalMoves[this.agentIndex.row][this.agentIndex.column + 1] < 15
        )
          visitedAvailableDirections.push(this.RIGHT);
      }

      if (visitedAvailableDirections.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * visitedAvailableDirections.length
        );
        const randomDirection = visitedAvailableDirections[randomIndex];
        // update the total moves and return the chosen direction
        switch (randomDirection) {
          case this.LEFT:
            this.totalMoves[this.agentIndex.row][this.agentIndex.column - 1]++;
            return this.LEFT;
          case this.RIGHT:
            this.totalMoves[this.agentIndex.row][this.agentIndex.column + 1]++;
            return this.RIGHT;
          case this.UP:
            this.totalMoves[this.agentIndex.row - 1][this.agentIndex.column]++;
            return this.UP;
          case this.DOWN:
            this.totalMoves[this.agentIndex.row + 1][this.agentIndex.column]++;
            return this.DOWN;
        }
      }

      // ***** Secondly, If no visited cell found move randomly any of the cell with
      // pit and wumpus probability less than threshold *****//

      // Create an array to store available directions
      const UnvisitedAvailableDirections: number[] = [];

      // Check if left is safe and add it to available directions
      if (
        this.agentIndex.row > 0 &&
        this.wumpusProbability[this.agentIndex.row - 1][
          this.agentIndex.column
        ] < this.threshold &&
        this.pitProbability[this.agentIndex.row - 1][this.agentIndex.column] <
          this.threshold
      ) {
        UnvisitedAvailableDirections.push(this.UP);
      }

      // Check if down is safe and add it to available directions
      if (
        this.agentIndex.column > 0 &&
        this.wumpusProbability[this.agentIndex.row][
          this.agentIndex.column - 1
        ] < this.threshold &&
        this.pitProbability[this.agentIndex.row][this.agentIndex.column - 1] <
          this.threshold
      ) {
        UnvisitedAvailableDirections.push(this.LEFT);
      }

      // Check if right is safe and add it to available directions
      if (
        this.agentIndex.row < 9 &&
        this.wumpusProbability[this.agentIndex.row + 1][
          this.agentIndex.column
        ] < this.threshold &&
        this.pitProbability[this.agentIndex.row + 1][this.agentIndex.column] <
          this.threshold
      ) {
        UnvisitedAvailableDirections.push(this.DOWN);
      }

      // Check if up is safe and add it to available directions
      if (
        this.agentIndex.column < 9 &&
        this.wumpusProbability[this.agentIndex.row][
          this.agentIndex.column + 1
        ] < this.threshold &&
        this.pitProbability[this.agentIndex.row][this.agentIndex.column + 1] <
          this.threshold
      ) {
        UnvisitedAvailableDirections.push(this.RIGHT);
      }

      if (UnvisitedAvailableDirections.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * UnvisitedAvailableDirections.length
        );
        const randomDirection = UnvisitedAvailableDirections[randomIndex];
        // update the total moves and return the chosen direction
        switch (randomDirection) {
          case this.LEFT:
            this.totalMoves[this.agentIndex.row][this.agentIndex.column - 1]++;
            return this.LEFT;
          case this.RIGHT:
            this.totalMoves[this.agentIndex.row][this.agentIndex.column + 1]++;
            return this.RIGHT;
          case this.UP:
            this.totalMoves[this.agentIndex.row - 1][this.agentIndex.column]++;
            return this.UP;
          case this.DOWN:
            this.totalMoves[this.agentIndex.row + 1][this.agentIndex.column]++;
            return this.DOWN;
        }
      }

      /**** Lastly, move randomly ****/
      const availableDirections: number[] = [];
      if (this.agentIndex.row > 0) {
        availableDirections.push(this.UP);
      }
      if (this.agentIndex.column > 0) {
        availableDirections.push(this.LEFT);
      }
      if (this.agentIndex.row < 9) {
        availableDirections.push(this.DOWN);
      }
      if (this.agentIndex.column < 9) {
        availableDirections.push(this.RIGHT);
      }

      if (availableDirections.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * availableDirections.length
        );
        const randomDirection = availableDirections[randomIndex];
        // update the total moves and return the chosen direction
        switch (randomDirection) {
          case this.LEFT:
            this.totalMoves[this.agentIndex.row][this.agentIndex.column - 1]++;
            return this.LEFT;
          case this.RIGHT:
            this.totalMoves[this.agentIndex.row][this.agentIndex.column + 1]++;
            return this.RIGHT;
          case this.UP:
            this.totalMoves[this.agentIndex.row - 1][this.agentIndex.column]++;
            return this.UP;
          case this.DOWN:
            this.totalMoves[this.agentIndex.row + 1][this.agentIndex.column]++;
            return this.DOWN;
        }
      }
    }

    else if (!this.isItDangerCell()) {
      console.log("free space");
      // first go to the unvisited index randomly
      const freeSpaceToUnvisitedDirections: number[] = [];
      if (
        this.agentIndex.row < 9 &&
        !this.cellVisited[this.agentIndex.row + 1][this.agentIndex.column]
      ) {
        freeSpaceToUnvisitedDirections.push(this.DOWN);
      }

      if (
        this.agentIndex.column < 9 &&
        !this.cellVisited[this.agentIndex.row][this.agentIndex.column + 1]
      ) {
        freeSpaceToUnvisitedDirections.push(this.RIGHT);
      }

      if (
        this.agentIndex.row > 0 &&
        !this.cellVisited[this.agentIndex.row - 1][this.agentIndex.column]
      ) {
        freeSpaceToUnvisitedDirections.push(this.UP);
      }

      if (
        this.agentIndex.column > 0 &&
        !this.cellVisited[this.agentIndex.row][this.agentIndex.column - 1]
      ) {
        freeSpaceToUnvisitedDirections.push(this.LEFT);
      }

      if (freeSpaceToUnvisitedDirections.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * freeSpaceToUnvisitedDirections.length
        );
        const randomDirection = freeSpaceToUnvisitedDirections[randomIndex];
        // update the total moves and return the chosen direction
        switch (randomDirection) {
          case this.LEFT:
            this.cellVisited[this.agentIndex.row][this.agentIndex.column - 1] =
              true;
            this.totalMoves[this.agentIndex.row][this.agentIndex.column - 1]++;
            return this.LEFT;
          case this.RIGHT:
            this.cellVisited[this.agentIndex.row][this.agentIndex.column + 1] =
              true;
            this.totalMoves[this.agentIndex.row][this.agentIndex.column + 1]++;
            return this.RIGHT;
          case this.UP:
            this.cellVisited[this.agentIndex.row - 1][this.agentIndex.column] =
              true;
            this.totalMoves[this.agentIndex.row - 1][this.agentIndex.column]++;
            return this.UP;
          case this.DOWN:
            this.cellVisited[this.agentIndex.row + 1][this.agentIndex.column] =
              true;
            this.totalMoves[this.agentIndex.row + 1][this.agentIndex.column]++;
            return this.DOWN;
        }
      }
      // if all neighbor have been visited, choose random direction
      else {
        while (true) {
          switch (this.rand(1, 4)) {
            //if selected, move right
            case 1:
              if (this.agentIndex.row < 9) {
                this.totalMoves[this.agentIndex.row + 1][
                  this.agentIndex.column
                ]++;

                this.contiguousRandomMoveCount++;
                return this.DOWN;
              }
              break;
            //if selected, move up
            case 2:
              if (this.agentIndex.column < 9) {
                this.totalMoves[this.agentIndex.row][
                  this.agentIndex.column + 1
                ]++;

                this.contiguousRandomMoveCount++;
                return this.RIGHT;
              }
              break;
            //if selected, move left
            case 3:
              if (this.agentIndex.row > 0) {
                this.totalMoves[this.agentIndex.row - 1][
                  this.agentIndex.column
                ]++;

                this.contiguousRandomMoveCount++;
                return this.UP;
              }
              break;
            //if selected, move down
            case 4:
              if (this.agentIndex.column > 0) {
                this.totalMoves[this.agentIndex.row][
                  this.agentIndex.column - 1
                ]++;
                this.contiguousRandomMoveCount++;
                return this.LEFT;
              }
              break;
          }
        }
      }
    }
    return -1;
  }

  removeStench(row: number, column: number) {
    const directions = [
      [-1, 0], // Up
      [1, 0], // Down
      [0, -1], // Left
      [0, 1], // Right
    ];

    for (const [dr, dc] of directions) {
      const cr = row + dr;
      const cc = column + dc;

      if (cr >= 0 && cr <= 9 && cc >= 0 && cc <= 9) {
        let flag = 1;

        for (const [r, c] of [
          [-1, 0],
          [1, 0],
          [0, -1],
          [0, 1],
        ]) {
          const nr = cr + r;
          const nc = cc + c;

          if (
            nr >= 0 &&
            nr <= 9 &&
            nc >= 0 &&
            nc <= 9 &&
            this.board[nr][nc].includes("W")
          ) {
            flag = 0;
            break;
          }
        }

        if (flag) {
          this.board[cr][cc] = this.board[cr][cc].replace("stench", "");
          let xd = JSON.stringify(this.board);
          console.log("wumpus killed: ", this.wumpusKilled);
          console.log("after removing stench: ", row, column, xd);
        }
      }
    }

    this.wumpusProbability[row][column] = 0.0;
    console.log("after removing stench: ", row, column, this.board);
  }


  rand(min: number, max: number) {
    if (min == max)
      return min;

    var date = new Date();
    var count = date.getMilliseconds() % 10;

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


  isItDangerCell() {
    if (this.board[this.agentIndex.row][this.agentIndex.column].includes('breeze') || this.board[this.agentIndex.row][this.agentIndex.column].includes('stench')) {
      return true;
    }
    return false;
  }

  isWumpusClose() {
    if (
      this.agentIndex.column < 9 &&
      this.wumpusProbability[this.agentIndex.row][this.agentIndex.column + 1] >
        0.5
    ) {
      this.shootDirection = this.RIGHT;
      return true;
    }
    if (
      this.agentIndex.column > 0 &&
      this.wumpusProbability[this.agentIndex.row][this.agentIndex.column - 1] >
        0.5
    ) {
      this.shootDirection = this.LEFT;
      return true;
    }
    if (
      this.agentIndex.row < 9 &&
      this.wumpusProbability[this.agentIndex.row + 1][this.agentIndex.column] >
        0.5
    ) {
      this.shootDirection = this.DOWN;
      return true;
    }
    if (
      this.agentIndex.row > 0 &&
      this.wumpusProbability[this.agentIndex.row - 1][this.agentIndex.column] >
        0.5
    ) {
      this.shootDirection = this.UP;
      return true;
    }
    return false;
  }

  calculateBreezeAndStench() {
    if (!this.nearDanger[this.agentIndex.row][this.agentIndex.column]) {
      if (this.board[this.agentIndex.row][this.agentIndex.column].includes('breeze')) {
        this.updatePitWumpusPercentage(true, false);
      }

      if (this.board[this.agentIndex.row][this.agentIndex.column].includes('stench')) {
        this.updatePitWumpusPercentage(false, true);
      }
    }
  }

  updatePitWumpusPercentage(pit: boolean, wumpus: boolean) {
    if (this.agentIndex.column != 9 && !this.cellVisited[this.agentIndex.row][this.agentIndex.column + 1]) {
      if (pit) {
        this.pitProbability[this.agentIndex.row][this.agentIndex.column + 1] += 0.25
      }
      if (wumpus) {
        this.wumpusProbability[this.agentIndex.row][this.agentIndex.column + 1] += 0.25
      }
    }
    if (this.agentIndex.row != 0 && !this.cellVisited[this.agentIndex.row - 1][this.agentIndex.column]) {
      if (pit) {
        this.pitProbability[this.agentIndex.row - 1][this.agentIndex.column] += 0.25
      }
      if (wumpus) {
        this.wumpusProbability[this.agentIndex.row - 1][this.agentIndex.column] += 0.25
      }
    }
    if (this.agentIndex.row != 9 && !this.cellVisited[this.agentIndex.row + 1][this.agentIndex.column]) {
      if (pit) {
        this.pitProbability[this.agentIndex.row + 1][this.agentIndex.column] += 0.25
      }
      if (wumpus) {
        this.wumpusProbability[this.agentIndex.row + 1][this.agentIndex.column] += 0.25
      }
    }
    if (this.agentIndex.column != 0 && !this.cellVisited[this.agentIndex.row][this.agentIndex.column - 1]) {
      if (pit) {
        this.pitProbability[this.agentIndex.row][this.agentIndex.column - 1] += 0.25
      }
      if (wumpus) {
        this.wumpusProbability[this.agentIndex.row][this.agentIndex.column - 1] += 0.25
      }
    }
    this.nearDanger[this.agentIndex.row][this.agentIndex.column] = true;
  }

  checkWhereAgentIs(row: number, column: number): boolean {
    if (this.agentIndex.row == row && this.agentIndex.column == column) {
      return true;
    }
    return false;
  }

  checkDoorState(row: number, column: number): string {
    if (this.board[row][column].includes('G') && this.cellVisited[row][column]) {
      return 'gold';
    }
    else if (this.board[row][column] == 'S' && !this.cellVisited[row][column]) {
      return 'notvisited';
    }
    else if (this.board[row][column] == 'S' && this.cellVisited[row][column]) {
      return 'safe';
    }
    else if (this.board[row][column] == 'W' && this.cellVisited[row][column]) {
      return 'wumpus';
    }
    else if (this.board[row][column] == 'P' && this.cellVisited[row][column]) {
      return 'pit';
    }
    else if (this.board[row][column].includes('stench') && this.cellVisited[row][column]) {
      return 'stench';
    }
    else if (this.board[row][column].includes('breeze') && this.cellVisited[row][column]) {
      return 'breeze';
    }

    return 'notvisited';
  }

  checkCheatDoorState(row: number, column: number): string {
    let demoBoard = this.cboard;

    if (this.board[row][column].includes('G')) {
      return 'gold';
    }


    else if (this.board[row][column] == 'W') {
      return 'wumpus';
    }
    else if (this.board[row][column] == 'P') {
      return 'pit';
    }
    else if (this.board[row][column].includes('stench')) {
      return 'stench';
    }

    else if (this.board[row][column].includes('breeze')) {
      return 'breeze';
    }

    else if (this.board[row][column] == 'S') {
      return 'safe';
    }
    return 'safe';
  }
}

