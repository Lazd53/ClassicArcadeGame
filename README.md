# Cooties, Run! The game.

## Description
Welcome back to third grade!! Your job is to cross the bridge without catching cooties from any of the third grade girls.

## Prerequisites
Your favorite web browser.

## Built with
* HTML5
* CSS3
* Javascript ES6

## How to run:
Open index.html with your favorite web browser.

## How to play:
Player will start at the center of the bottom of the board. Use the arrow keys to navigate around the board. Avoid all the girls, or you will get cooties!! First retrieve the key, which opens the bridge that will let you escape to freedom!

* Don't let the girls touch you
* The bridge won't appear until you retrieve the key
* You can't enter the water - the only way out is the bridge
* Every time you cross the bridge, you will be restarted back at the beginning - and the girls will get faster!

## Development Notes:

* Added another 'key' object to app.js that triggers player.key, which hides the key, shows the bridge, and allows the player to walk across the water at the bridge point.
* Enemies are created every 0.9 seconds, and pushed to the allEnemies array. They are filtered out every time the x-value exceeds 900 (ie past the borders of the canvas).
* Every time enemy.update() is run it will check to see if it is a minimum of 70px away from the player (simulating a round hit boxes 30px in diameter around both enemy and player).
* Enemies will speed up after every win by an additional 10% of base speed.
* Credits:
Graphics for the bridge - Andrea Wooding

## Course Name
Front-End Web Developer - Udacity

## Author
Alex Love
