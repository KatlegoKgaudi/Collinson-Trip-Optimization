# Travel Optimization Console App
Purpose

This README explains how to run the Node.js console application that calculates the minimum number of cars required to transport groups of people given the car seat capacities. This document shall serve as a guide on how to do the following:
-Pull down the code from GitHub into your directory.
-install necessary dependencies.
-Compile and run the TypeScript project.
-Input the car seat capacities and number of passengers.
-Understand how the application calculates the minimum number of cars needed.

This app allows the user to input multiple cars with varying capacities and the number of passengers per group, then efficiently calculates the fewest number of cars required to transport all passengers while leaving unnecessary cars parked.

Requirements
-Node.js 18+ and npm
-Visual Studio Code or any code editor (optional)
-@types/node for Node.js type definitions: Install the Node type definitions with:npm install --save-dev @types/node

Running the Project
After cloning the repository down:

1) Compile the TypeScript files:
npx tsc

2) Run the compiled JavaScript:
node main.js

### Input Instructions

The program will prompt the user with the following:

Enter number of people to transport, e.g. "1, 2, 3" = 6 people:
Enter a comma-separated list of numbers representing the number of people per group.
Example input: 3, 3, 3

Instruction: "Enter car seat capacities, e.g. "3, 5, 3" = 3 cars with 11 total seats:"
Enter a comma-separated list of numbers corresponding to the number of seats in each car.
Example input: 1, 5, 5

Output

The program will display:

Minimum number of cars needed to transport all passengers. (if the minimum car calculation is succcessful) 
Maximum amount of cars used with how many passengers left unaccounted for. (if the minimum car calculation is unsuccessful)
Relevant Error messages for outlier edge cases (negative seats, empty array lengths, etc...)

Example:

Minimum amount of cars needed: 2


The algorithm uses a greedy approach, sorting car seats descending and filling the largest cars first. This guarantees the minimum number of cars used in all scenarios.

Logic is encapsulated in an exportable class, UserInputHandler, making it reusable and modular.

TravelOptimizer contains all the calculations to separate concerns from user input handling, following the single responsibility principle.
