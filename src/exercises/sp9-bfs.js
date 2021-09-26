/**
 * Ref: https://github.com/jeantimex/javascript-problems-and-solutions/blob/HEAD/src/bfs/shortest-path-in-maze.js
 * 
 * Shortest Path in Maze
 *
 * Given a matrix represents a maze, X is the starting point, Y is the destination,
 * # is wall, now you can walk in four directions: up, down, left, right, what is
 * the minimum steps to get to Y from X?
 *
 * For example, we have the following maze:
 *
 *  ----------------
 *  .  X  .  #  .  .
 *  .  .  .  .  #  .
 *  .  #  .  .  .  .
 *  .  #  #  .  .  .
 *  .  #  Y  .  .  .
 *  .  .  .  .  .  #
 *  ----------------
 *
 *  Solution:
 *  We found it!!! It took:  7  steps
 *  ----------------
 *  .  X  .  #  .  . 
 *  .  @  @  .  #  . 
 *  .  #  @  @  .  . 
 *  .  #  #  @  .  . 
 *  .  #  Y  @  .  . 
 *  .  .  .  .  .  # 
 *  ----------------
 * 
 * @param {string[][]} maze
 * @param {number[]} px 
 *
 */

import { Queue } from '@datastructures-js/queue';
import { printMaze } from '../utils/maze-helper.js';

const shortestPath = (maze, px) => {
    // Complete
}

const maze = [
    ['.','X','.','#','.','.'],
    ['.','.','.','.','#','.'],
    ['.','#','.','.','.','.'],
    ['.','#','#','.','.','.'],
    ['.','#','Y','.','.','.'],
    ['.','.','.','.','.','#']
];

shortestPath(maze, [0,1]);