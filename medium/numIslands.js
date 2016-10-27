/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var n = grid.length;
    if (n === 0) {
        return 0;
    }
    var m = grid[0].length;
    var count = 0;

    var markIsland = function(grid, i, j) {
        if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] !== '1') {
            return;
        }
        grid[i][j] = '0';
        markIsland(grid, i + 1, j);
        markIsland(grid, i - 1, j);
        markIsland(grid, i, j + 1);
        markIsland(grid, i, j - 1);
    }

    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            if (grid[i][j] === '1') {
                markIsland(grid, i, j)
                count++;
            }
        }
    }
    return count;
};