# UMBRELLA WARRIOR #

## BY BIG BACKFLIP GAMES
### Members: Mark Taylor-Chacksfield, Thomas Jeffries, Rafael Haataja, Danny Matthews

## .        Game Overview

We have created a side scrolling adventure game, reminiscent of early SNES, SEGA Mega Drive hits like Super Mario and Shinobi 2. Our game follows an umbrella wielding ninja warrior as he seeks to avenge a fallen love. He does this by navigating a number of levels and defeating the enemies sent to chase him down. We have chosen a classic 16/8 bit style for this game and kept the colour palette fairly dark in order to convey the tense atmosphere. The art design calls on ancient Japanese architecture, typical of when ninjas were more common.

## . Individual Contributions

### MARK
I coded the **player**, compiled everyones contributions and helped to make it work together.
I created the enemy & player sprites as well as all of their animations.
I made the **_tilesets for the 2nd 'dojo'_** level of the final game outcome.
I also helped in designing the levels for the final outcome, using what Danny had made and reworking it slightly.
I also coded the **scene switching** function, pause menu and end screen.

### THOMAS 
My contributions to the project were creating the main menu and subsequent screens. I wrote the lore, tutorial and credit screens. I used mouseIsOver, MousePressed and Draw functions to achieve this. To improve formatting, I used arrays for the content of each screen. I also designed the Umbrella Warrior artwork on the main menu and added the rain affect by generating falling rect shapes.

I created the attack action in a simple rectangle format so that we could implement this into our code later. I achieved this by creating player and enemy classes, then using a draw function to create the hitbox and a checkCollision function to determine a hit or miss. A hit will then null the enemy class. I also created a ranged attack which we decided against using for thematic reasons.


### RAFA  
My role was to code all of the enemy movemements and functions to check the collisions between the player, player attacks and the enemy. I made it so that the enemies follow the player around wherever he goes using vectors. I made it so that the enemies spawn in at random points on the tilemap everytime the trigger to move on to the next scene happens. Whenever the enemy collides with the player the player spawns back in his inital position (dies) and the enemies once again spawn in randomly. And finally, using collsions I managed to make the attack animation of the player kill the enemy.

### DANNY  
I was in control of the tile map rooms for the player to jump and fight around, I made and designed the artwork by drawing the tiles using pixel drawing tools for the background and then assembling them to create a field which fits the aesthetic of the game so that it is immersive for the player and is visually pleasing and feels nice to play. The first map i made was the dojo looking one which had lots of props scattered around for the player to climb on, and from then i built 2 cave like maps with spikes and platforms and the last map is the grassy moon type map.


## .        Themes 

The main theme of this game is adventure. The Umbrella Warrior has far to go and many enemies in his path. We have opted for a darker tone in order to create intrigue and buy in from the player. Ultimately, we are looking to create a high stakes situation in a very short amount of time. 


## .        Game Design 

Our game is designed to move at a fast pace to convey the urgency of our warrior's quest. The player character is nimble and can move up and down the screen, displaying his training as a ninjitsu. All enemies track the player around each level to increase the pressure to act quickly as you navigate around. At the prototype stage, the focus was more on evasion, but we implemented the attack action in order to make the gameplay more offence driven, opposed to defence. 

We have mapped out a ranged attack mechanic, but have decided against using this to increase the pressure of having to deal with enemies at close quarters.

## .        Narrative Development.

We plan to expand on the narrative of the game by increasing the number of levels/settings, the number of enemy types and including a 'final boss'. Currently the game begins in a cave, moves to a dojo and then moves outside to a nighttime landscape. 

We also discussed that an easter egg for completing the game could be getting to replay as the fallen geisha from the game lore on further playthroughs. This is not something that we will be able to implement given the timeframe and code line limitations. 


## .        Aesthetics

The player is a classic ninja silhouette. The enemy sprites are designed to look like samurai ghosts. We have stylised our maps to look like Japan during the Edo period.

## .         What we would add>>>

Given time, we would have added in the ranged attack action and added some more levels. We liked the idea of creating a final boss level that presented an enemy with more hit points that required a number of attacks to defeat. Another mechanic that we have spoken about is a constraint that requires all enemies to be killed before the player can move to the next level. Thematically, this would lean into the character’s need for vengeance. With a larger team or studio, we could look to include animated cutscenes between levels. Giving us a chance to further flesh out the narrative. Knowledge of a more cohesive method of working on our code together, could have helped to streamline our building process and allow for further technical advancements. We would definitely have added a score and sound effects to the game, had we the time.

Additionally, we couldn't implament the main menu screen in time. Everything in it works except for the play button. Currently, **_it's commented out_** inside the index tab. Again, had we given ourselves more time, we would have coded in the main menu screen seamlessly
