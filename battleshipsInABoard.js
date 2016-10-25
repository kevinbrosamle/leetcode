/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    var count = 0;
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            if (board[i][j] === '.') {
                continue;
            }
            if (i > 0 && board[i-1][j] === 'X') {
                continue;
            }
            if (j > 0 && board[i][j-1] === 'X') {
                continue;
            }
            count++;
        }
    }
    return count;
};

// check if index is undefined
// only need to check to the left and up
// if it exists then we already counted that ship