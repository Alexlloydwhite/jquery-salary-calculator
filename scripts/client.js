$(document).ready(onReady);

function onReady(){
    $('#submit').on('click', addEmployee);
    $('#employeeTable').on('click', '.delete', deleteEmployee);
    showEmployees();
}

const employees = [
    {
        id: 4521,
        firstName: 'Dr. Frasier',
        lastName: 'Crane',
        title: 'Radio Psychologist',
        annualSalary: 80000,
    },
    {
        id: 8724,
        firstName: 'Daphne',
        lastName: 'Moon',
        title: 'Home Healthcare',
        annualSalary: 30000,
    },
    {
        id: 9623,
        firstName: 'Roz',
        lastName: 'Doyle',
        title: 'Assistant', 
        annualSalary: 58000,
    },
    {
        id: 1111,
        firstName: 'Eddie',
        lastName: 'N/A',
        title: 'Dog', 
        annualSalary: 0,
    },
    {
        id: 1234,
        firstName: 'Martin',
        lastName: 'Crane',
        title: 'Retired Cop', 
        annualSalary: 50000,
    },
];

function addEmployee(){
    console.log('Adding Employee');
    // collects informaton from add employee inputs as an object
    let newEmployee ={
        id: $('#idIn').val(),
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        title: $('#titleIn').val(),
        annualSalary: $('#annualSalaryIn').val(),
    }
    // adds newEmployee object to employees array
    employees.push(newEmployee);
    // clear inputs
    clearInputs();
    //display employees on the DOM
    showEmployees();
}

function showEmployees(){
    // empty's table
    $('#employeeTable').empty();

    // loops thru employees array, appends every object to the DOM
    for(let employee of employees){
        $('#employeeTable').append(`
        <tr>
            <td id="id">${employee.id}</td>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.title}</td>
            <td>$${employee.annualSalary}</td>
            <td><button class="delete">Delete</button></td>   
        </tr>`);
    } // end for loop

    // updates the total salary on the DOM
    calculateSalary();
}

function calculateSalary(){
    // sets varibale totalSalary to change within function
    let totalSalary = 0;
    
    //loops thru employees array and adds their annual salary to the total salary
    for (employee of employees){
        totalSalary += Number(employee.annualSalary);
    } // end for loop
    
    // appends the total monthly salary to the DOM
    $('#totalMonthlyOut').empty().append(Math.round(totalSalary /12 ));
    // check if the total monthly salary is at or above 20000, if it is
    // the background color of total: changes to red.
    
    if (totalSalary /12 >= 20000){
        $('#totalMonthlyOut').addClass('red');
    } else {
        $('#totalMonthlyOut').removeClass('red');
    } // end if 
}

function clearInputs(){
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idIn').val('');
    $('#titleIn').val('');
    $('#annualSalaryIn').val('');
}

function deleteEmployee(){
    // finds the row containing the delete button and removes that object from the array
    let val = $(this).closest('tr').children('#id').text();

    // assign index to the ID number of the row to be deleted
    let index = employees.findIndex(function(item) {return item.id == val})
    
    // deletes row from array
    employees.splice(index, 1);
    
    //update DOM to show removal
    showEmployees();
} 

function addRedBackground(){
    $('#totalMonthlyOut').addClass('red');
}
