var checkIfIsland = function(grid, i, j) {
  // check if grid[i][j] is undefined or !== 1
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length) {
    return 1;
  } else if (grid[i][j] !== 1) {
    // perim count++
    return 1;
  } else {
    return 0;
  }
};

var islandPerimeter = function(grid) {
  if (grid === undefined) {
    return 0;
  }
  // 0 is water
  // 1 is land
  // perimter count = 0
  var perim = 0;

  // loop grid i
  for (var i = 0; i < grid.length; i++) {
    // loop grid j
    for (var j = 0; j < grid[i].length; j++) {
      // if grid[i][j] === 1
      if (grid[i][j] === 1) {
        perim += checkIfIsland(grid, i - 1, j);
        perim += checkIfIsland(grid, i + 1, j);
        perim += checkIfIsland(grid, i, j - 1);
        perim += checkIfIsland(grid, i, j + 1);
      }
    }
  }

  return perim;
};

var grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0]
];

console.log(islandPerimeter(grid));
