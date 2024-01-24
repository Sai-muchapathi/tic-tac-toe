**Tic-Tac-Toe** is the basic game project implemented using React JS. 

I worked on this repository only to use React JS, hence it doesn't use any Backend or the Database.

## Components Used
- GameBoard
- GameOver
- Player
- Logs
- Header

## States Used
## App.jsx
- gameTurns
- players
## ./components/Player.jsx
- playerName
- isEditing
  
The **gameTurns** state and the **handleSelect** methods are the core of the entire project that share details (states) across multiple Components.

The initial gameBoard components uses the **initialGameBoard** array which is **3*3 null array**. 
For every key press the **gameBoard matrix** replaces the cell with the **playerSymbol** by using the **handleSelect** funtion.
## The original array is not replaced directly, instead we will deep copy to the new matrix called gameBoard. 
- The deriveWinner() checks for the winner for every change in the matrix. It uses the predefined winning conditions array from the **WINNING_CONDITIONS.js** to compare the cells with the gameBoard.
- If the winner is found, the GameOver Component is triggered which then flushes the **gameTurns** state to **reStart** the match.

## Topics that I have learned in particular
- Spliting components by feature and state.
- Forwarding Props
- Setting Component types dynamically.
- Component instances work in isolation.
- User input and two way binding.
- Rendering multidimensional list.
- Updating object state immutably.
- Lifting state up.
- Avoiding Intersecting states.
- Deriving states from Prop.
- Sharing states across Components.
  

