// body.js
document.addEventListener('DOMContentLoaded', () => {
    const board = document.querySelector('.checkers-container');

    // Loop to create the 64 squares 
    for (let i = 0; i < 64; i++) {
        const square = document.createElement('div');  // Create a new div for each square
        const row = Math.floor(i / 8);  // Get the row (0 to 7)
        const col = i % 8;             // Get the column (0 to 7)

        // Check if the sum of row and column is even or odd to alternate colors
        if ((row + col) % 2 === 0) {
            square.classList.add('white');  // White for even squares
        } else {
            square.classList.add('black');  // Black for odd squares
        }

        board.appendChild(square);  // Append the square to the board
    }
});

class Piece {
    constructor(board, color = 'red', x = 3, y = 3) {
        // Create the piece element
        this.node = document.createElement('div');
        this.node.classList.add(`${color}-piece`);
        this.node.style.position = 'absolute';
        // Set initial position on the board (x and y should be based on grid positions)
        this.x = x;
        this.y = y;
        // Update the piece's position on the board
        this.updatePosition();
        // Add the piece to the board
        board.appendChild(this.node);
    }
    updatePosition() {
        // Align with the grid system
        this.node.style.left = `${this.x * 50}px`;
        this.node.style.top = `${this.y * 50}px`;
    }
    move(direction) {
        switch(direction) {
            case 'ArrowUp':
                if (this.y > 0) this.y--;
                break;
            case 'ArrowDown':
                if (this.y < 7) this.y++;
                break;
            case 'ArrowLeft':
                if (this.x > 0) this.x--;
                break;
            case 'ArrowRight':
                if (this.x < 7) this.x++;
                break;
        }
        this.updatePosition();
    }
}









