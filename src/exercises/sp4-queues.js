import { MaxPriorityQueue } from "@datastructures-js/priority-queue";
import { Stack } from "@datastructures-js/stack";

/** 
  * Ref: https://www.hackerearth.com/practice/data-structures/queues/basics-of-queues/practice-problems/algorithm/disk-tower-b7cc7a50/
  * 
  * Task description: 
  * Your task is to construct a tower in days by following these conditions:
  *  - Every day you are provided with one disk of distinct size.
  *  - The disk with larger sizes should be placed at the bottom of the tower.
  *  - The disk with smaller sizes should be placed at the top of the tower.
  * 
  * The order in which tower must be constructed is as follows:
  *  - You cannot put a new disk on the top of the tower until all the larger disks that are given to you get placed.
  * Restriction: Disk size will never be bigger than the size of the array
  * @param {Array} disks_provided - Arrays with the disks provided each day - ex. [4,5,1,2,3]
  * @returns {Array}  - Array of arrays with the disks placed each day - ex. [[], [5,4], [], [], [3,2,1]]
*/
const disk_tower = (disks_provided) => {
    // Complete
}

disk_tower([4,5,1,2,3]).forEach((disks, day) => console.log('Day',day + 1,'=>',JSON.stringify(disks)));
