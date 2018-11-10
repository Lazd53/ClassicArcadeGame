// Enemies our player must avoid
// Note to reviewer: rebuilt as a class from a constructor function, for practice

let wins = 0;
let winSpeed = 1;
class Enemy {
  constructor(y, s, sprite) {
    this.sprite = sprite;
    this.x = -80;
    this.y = y;
    this.speed = s; //randomized multiplier called when instance called
  }

  update(dt) {
    let speed = dt * 50 * this.speed * (1+(wins*0.1));
    this.x += speed;
    if (70 > Math.sqrt((this.x-player.x)**2 + (this.y - player.y)**2)) {
      player.caught = true;
    }
  }

// randomizes which sprite is used for the enemy
  whichSprite() {
    const sprites = ['images/char-cat-girl.png', 'images/char-horn-girl.png', 'images/char-pink-girl.png', 'images/char-princess-girl.png']
    let selector = Math.floor(Math.random()*4);
    this.sprite = sprites[selector];
  }

//renders each enemy
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

//Our hero! Creates his class, to be instanced later
class Player {
  constructor() {
    this.sprite = 'images/char-boy.png';
    this.x = 303;
    this.y = 405;
    this.xblock = 101;
    this.yblock = 83;
    this.key = false;
    this.caught = false;
  }

// changes key to true if player steps on the key
  update() {
    if (player.x == key.x && player.y == key.y) {
      this.key = true;
    }
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput(input) {
    if (input[0]) {
      if (this.y >0) {
        if (input[1]) {
          if (this.x != 606) {
            this.x += this.xblock;
          }
        } else {
          if (this.x != 0) {
            this.x -= this.xblock;
          }
        }
      }
    }else{
      if (input[1]) {
        //walk on bridge, only if player has key
        if (this.x >= 303 && this.x <404 && this.key && this.y > -93) {
          this.y -= this.yblock;
        }else{
          if (this.y > 83) {
          this.y -= this.yblock;
          }
        }
      }else{
        if (this.y < 332) {
        this.y += this.yblock;
        }
      }
    }
  }
}

//create class key - for the key item
class Key {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/Key.png';
  }
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

//randomize speed - enemies
let speed = function () {
  let x = (Math.random()*5)+1;
  return x;
}

//randomize starting location in y axis - enemies/key
let yVal = function () {
  let y = Math.floor(Math.random()*4)+1;
  return y*83 -10; // + 40;
}

//randomize starting location in x axis - key only
let xVal = function () {
  let x = Math.floor(Math.random()*7);
  return x*101; // + 40;
}

//select sprite randomly - enemies
const sprites = ['images/char-cat-girl.png', 'images/char-horn-girl.png',
            'images/char-pink-girl.png', 'images/char-princess-girl.png'];
let spriteChooser = function() {
  let selector = Math.floor(Math.random()*4);
  return sprites[selector];
}

//container array for all enemies
let allEnemies = [];

//directions on how to make an enemy and push to array
let newEnemies = function() {
  let enemy = new Enemy(yVal(),speed(), spriteChooser());
  allEnemies.push(enemy);
}

//constructs enemies at set intervals
setInterval(newEnemies, 900);

//new single instances - player, key
let player = new Player();
let key = new Key(xVal(),yVal()); //dropped at random location


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
      // [true = horizontal movement, true = positive value]
        37: [true, false], //left
        38: [false, true], //up
        39: [true, true], //right
        40: [false, false] //down
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
let winCount = document.getElementById("wins");
