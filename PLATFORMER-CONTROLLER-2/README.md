## PLAYER CONTROLLER README ##

# How to play:
- Use the arrow keys to make the player move
- If any player is touching an object with a collider, you can jump.
    (Currently, the coliders for the player are only in place for the jumping mechanic, there isn't any wall or ceiling detection yet)

## Player movement code notes:

I found this video: https://www.youtube.com/watch?v=TwWZwS8iBrw which helped me make the base for the platformer controller. 

I thought it was interesting how he did things like use functions in the player object. It helped keep the code more contained.

# Own Adjustments & current issues
There were some issues/aspects in the tutorial code which I wanted to improve and adjust such as:
- how you can infinitely jump 
- gravity only applied when you jump (meaning when you walked off of the higher platform you wouldn't fall)
- only jumping in straight lines

In the prototype I added 'jumpCount' & 'canJump to solve the first issue.

I took away some of the tutorial code (an if statement which only allowed you to jump if not pressing the left/right arrowkeys) to allow the player to jump and move at the same time.

I haven't solved the issue where the player doesn't fall when you walk off of a platform yet. I logged in the console to see if it detected whether the player was on the collider or not - and it did recognize that, so  I need to revise the if statements in the collisions part of the code (the rectCollider function?) to sort it out.

I lso ran into another issue when implamenting the enemy code. I need to again more carefully understand the code so I can properly implament the enemies into it. Whenever I tried to copy and paste it into the main file it would always generate lots of errors.

The player sprite need to be updated because they overlay over the idle sprite.

A major issue with the code so far though is that it is too cluttered. I need to find the code that lets me link these multiple files together to create a neater & less destructive coding environment.


