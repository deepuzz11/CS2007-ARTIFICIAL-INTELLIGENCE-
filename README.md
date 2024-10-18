# CIA-1 
# Search Algorithms

This repository contains implementations of various search algorithms commonly used in computer science and artificial intelligence. Each algorithm has been implemented to demonstrate its unique approach to solving problems, particularly in the context of searching through data structures.

## Table of Contents

- [Introduction](#introduction)
- [Algorithms Overview](#algorithms-overview)
- [Implementation](#implementation)
- [Results](#results)

## Introduction

Searching algorithms are fundamental in computer science for retrieving data from a data structure. This project includes 12 different search algorithms, each suited for different scenarios and types of data.

## Algorithms Overview

### 1. British Museum Search (BMS)
- **Description**: A search algorithm that employs lexicographical ordering and exploration. It explores all possible paths without dead-end retracement and allows multiple solutions.

### 2. Depth First Search (DFS)
- **Description**: An uninformed search algorithm that uses backtracking and preemptive exit. It explores as far down a branch as possible before backtracking.

### 3. Breadth First Search (BFS)
- **Description**: A variation of DFS that utilizes a horizontal greedy method and does not require traceback. It explores all neighbors before moving to the next level.

### 4. Hill Climbing Search
- **Description**: A variation of DFS that employs heuristics to make decisions. If a tie occurs, it applies lexicographical ordering to select the next node.

### 5. Beam Search
- **Description**: A variant of BFS with a defined beam width that limits the number of nodes explored at each level.

### 6. Oracle
- **Description**: An extension of the British Museum Search that takes into account the amount of work done so far, using an absolute measure.

### 7. Branch and Bound (B&B)
- **Description**: An informed search that applies the oracle first, uses cost comparisons, and allows preemptive exits without backtracking.

### 8. Branch and Bound with Extended Lists
- **Description**: Implements the Dead Horse Principle (DHP), avoids exhaustive search, stores visited nodes, and expands nodes with less cost than the oracle.

### 9. Branch and Bound with Heuristics and Estimates
- **Description**: This algorithm calculates and compares cost and estimates with the oracle to find the optimal solution.

### 10. A* Search
- **Description**: Combines B&B with cost, estimates, DHP, and oracle for efficient pathfinding and optimization.

### 11. AO*
- **Description**: An extension of the A* algorithm, used for directed acyclic graphs.

### 12. Best First Search
- **Description**: An informed search algorithm that selects the next node based on the lowest cost estimate.

## Implementation

The implementations are written in Python and include the following key components for each algorithm:

1. **Algorithm Function**: Each algorithm has its own function to execute the search logic.
2. **Visualization**: Some algorithms include visualizations using `matplotlib` to illustrate their search process.

## Results

Upon running the scripts for each algorithm, you will receive outputs showcasing:

- Search paths taken by each algorithm.
- Visual representations of the search process, if applicable.

### Sample Input

The input format varies by algorithm and can include lists, graphs, or specific data structures.
![image](https://github.com/user-attachments/assets/3a5834de-b7c3-48ef-8351-0baa6f267168)


### Sample Output

The output will vary based on the algorithm, demonstrating the effectiveness of each search method.
![image](https://github.com/user-attachments/assets/853ef189-9783-4f61-b474-b64ee8c48c84)


# CIA - 2
# Minimax and Alpha-Beta Pruning Algorithms

This repository contains implementations of the **Minimax** and **Alpha-Beta Pruning** algorithms, which are widely used in artificial intelligence for decision-making in two-player games. The algorithms evaluate game states to determine the best possible move for a player, considering the opponent's best possible responses.

## Table of Contents

- [Introduction](#introduction)
- [Algorithms Overview](#algorithms-overview)
- [Implementation](#implementation)
- [Results](#results)
- [License](#license)

## Introduction

In two-player games, players alternate turns, and each player tries to maximize their own score while minimizing the opponent's score. The Minimax algorithm systematically explores all possible moves to find the optimal one. Alpha-Beta Pruning optimizes the Minimax algorithm by eliminating branches that do not need to be evaluated.

## Algorithms Overview

### Minimax Algorithm
The Minimax algorithm evaluates game positions to determine the best move for the maximizing player. The algorithm assumes that the opponent plays optimally, minimizing the player's potential score.

- **Time Complexity**: O(b^d), where b is the branching factor and d is the depth of the tree.
- **Space Complexity**: O(b * d).

### Alpha-Beta Pruning
Alpha-Beta Pruning is an optimization technique for the Minimax algorithm. It reduces the number of nodes evaluated in the game tree by pruning branches that won't affect the final decision.

- **Time Complexity**: O(b^(d/2)) in the best case.
- **Space Complexity**: O(b * d).

## Implementation

The implementation is written in Python and includes the following key components:

1. **Node Class**: Represents a node in the game tree.
2. **Minimax Function**: Implements the Minimax algorithm.
3. **Alpha-Beta Function**: Implements the Alpha-Beta Pruning algorithm.
4. **Evaluation Functions**: Used to evaluate the utility of terminal nodes.
5. **Tree Visualization**: Uses `matplotlib` to display the game tree.
6. **User Input**: Allows users to define the game tree dynamically.

## Results

Upon running the script, you will receive the following outputs:

- **Minimax Result**: The optimal move value determined by the Minimax algorithm.
- **Alpha-Beta Pruning Result**: The optimal move value determined by the Alpha-Beta Pruning algorithm.

The program will also generate evaluation tables for both algorithms, showcasing their decision-making processes.

### Sample Input

![alt text](image-2.png)

### Sample Output

Here’s an example of what the output might look like:
![alt text](image-1.png)
![alt text](image.png)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
