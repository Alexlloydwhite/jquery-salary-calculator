$(document).ready(onReady);

function onReady(){
    $('#submit').on('click', addEmployee);
    $('#employeeTable').on('click', '.delete', deleteEmployee);
    showEmployees();
}

const employees = [
    {
        id: 4521,
        firstName: 'Jen',
        lastName: 'Barber',
        title: 'Team Lead',
        annualSalary: 80000,
    },
    {
        id: 8724,
        firstName: 'Maurice',
        lastName: 'Moss',
        title: 'Support Team',
        annualSalary: 58000,
    },
    {
        id: 9623,
        firstName: 'Roy',
        lastName: 'Smith',
        title: 'Quality Assurance', 
        annualSalary: 48000,
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
            <td>${employee.id}</td>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.title}</td>
            <td>${employee.annualSalary}</td>
            <td><button class="delete">Delete</button></td>   
        </tr>`);
    }

    calculateSalary();
}

function calculateSalary(){
   
    let totalSalary = 0;
    
    for (employee of employees){
        totalSalary += Number(employee.annualSalary);
    }
    
    $('#totalMonthlyOut').empty().append(Math.round(totalSalary /12 ));
    
    if (totalSalary /12 >= 20000){
        addRedBackground();
    }
}

// clears inputs
function clearInputs(){
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idIn').val('');
    $('#titleIn').val('');
    $('#annualSalaryIn').val('');
}

function deleteEmployee(){
    $(this).closest('tr').remove();
}

function addRedBackground(){
    $('#totalMonthlyOut').addClass('red');
}