const fs = require('fs');
const readline = require('readline');

// Step 1: Create an empty file "employee.json" using open() method
fs.open('employee.json', 'w', (err, file) => {
    if (err) throw err;
    console.log('File created');
    // Insert manually 4 records into the "employee.json"
    const initialData = [
        { ename: 'Alice', ecity: 'London' },
        { ename: 'Bob', ecity: 'New York' },
        { ename: 'Charlie', ecity: 'Paris' },
        { ename: 'David', ecity: 'Tokyo' }
    ];
    fs.writeFileSync('employee.json', JSON.stringify(initialData, null, 2));
});

// Step 3a: Asynchronous method to read data with encoding
function readEmployee() {
    fs.readFile('employee.json', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('Asynchronous read:', JSON.parse(data));
    });
}

// Step 3b: Synchronous method to read data with encoding
function readEmployeeSync() {
    try {
        const data = fs.readFileSync('employee.json', 'utf8');
        console.log('Synchronous read:', JSON.parse(data));
    } catch (err) {
        console.error(err);
    }
}

// Step 4: Write 2 more records into the "employee.json" by taking user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNewRecords() {
    rl.question('Enter employee name and city (comma separated): ', (answer) => {
        const [ename, ecity] = answer.split(',').map(item => item.trim());
        const newRecord = { ename, ecity };

        fs.readFile('employee.json', 'utf8', (err, data) => {
            if (err) throw err;
            const employees = JSON.parse(data);
            employees.push(newRecord);

            fs.writeFile('employee.json', JSON.stringify(employees, null, 2), (err) => {
                if (err) throw err;
                console.log('Record added');
                rl.question('Add another record? (yes/no): ', (response) => {
                    if (response.toLowerCase() === 'yes') {
                        addNewRecords();
                    } else {
                        rl.close();
                        readNewData();
                    }
                });
            });
        });
    });
}

// Step 5: Fetch all 6 records into console without using encoding UTF-8
function readNewData() {
    fs.readFile('employee.json', (err, data) => {
        if (err) throw err;
        const employees = JSON.parse(data);
        console.log('All Records:', employees);
    });
}


//Calling the functions to execute the program
addNewRecords();
readEmployee();
readEmployeeSync();
