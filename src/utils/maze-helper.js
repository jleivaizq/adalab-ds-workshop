export const printMaze = (maze, path) => {

    const visited = Array(maze.length);
    for (let i = 0; i < maze.length; i++) {
      visited[i] = Array(maze[0].length).fill(false);
    }

    for(let x  = 0; x < path.length; x++) {
        visited[path[x][0]][path[x][1]] = true;
    }

    process.stdout.write('-----------------\n');

    for(let x = 0; x < maze.length; x++) {
        for(let y = 0; y < maze[0].length; y++) {
            let c = maze[x][y];
            if (visited[x][y]) {
                c = '@';
            }
            process.stdout.write(' ' + c + ' ');
        }
        process.stdout.write('\n');
    }

    process.stdout.write('-----------------\n');
}