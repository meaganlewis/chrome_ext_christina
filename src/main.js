document.addEventListener('DOMContentLoaded', () => {
    const board = document.querySelector('.checkers-container');

    // Create a red piece and add it to the board (initially at position (3,3))
    const piece = new Piece(board, 'red', 3, 3);

    // Add event listener for keyboard movement
    document.addEventListener('keydown', (e) => {
        // Check if the pressed key is an arrow key
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
            piece.move(e.code);
        }
    });
});
