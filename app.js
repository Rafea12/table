// Step 1: Create an empty array to hold the table data
let myTable = [];

// Step 2: Set variable values for the number of rows and columns
const numRows = 3;
const numCols = 7;

// Step 3: Set up a counter variable
let counter = 0;

// Step 4: Create a for loop for rows
for (let i = 0; i < numRows; i++) {
    // Create a temporary array to hold each row of data
    let tempTable = [];

    // Step 5: Nest a second loop for columns
    for (let j = 0; j < numCols; j++) {
        // Step 6: Increment the main counter
        counter++;

        // Step 7: Push the counter values to the temporary array
        tempTable.push(counter);
    }

    // Step 8: Push the temporary array to the main table
    myTable.push(tempTable);
}

// Step 9: Output to the console
console.table(myTable);
// Step 1: Create an empty array to hold the table data
let tablemy = [];

// Step 2: Set variable values for the number of rows and columns
const NumOfrow = 3;
const NumOfcolumn = 7;

// Step 3: Set up a counter variable
let count = 0;

// Step 4: Create a for loop for rows
for (let i = 0; i < numRows; i++) {
    // Create a temporary array to hold each row of data
    let tempTable = [];

    // Step 5: Nest a second loop for columns
    for (let j = 0; j < numCols; j++) {
        // Step 6: Increment the main counter
        counter++;

        // Step 7: Push the counter values to the temporary array
        tempTable.push(counter);
    }

    // Step 8: Push the temporary array to the main table
    myTable.push(tempTable);
}

// Step 9: Output to the console
console.table(myTable);