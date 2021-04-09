$(document).ready(onReady);

function onReady(){
    $('#submit').on('click', handleSubmit);
    $('#employeeTable').on('click', '.delete', deleteEmployee);
}

let totalSalary = 0;

function handleSubmit(){
    addEmployee();
    clearInputs();
}

function addEmployee(){
    console.log('Adding Employee'); 
    let firstName = $('#firstNameIn').val();
    let lastName = $('#lastNameIn').val();
    let id = $('#idIn').val();
    let title = $('#titleIn').val();
    let annualSalary = Number($('#annualSalaryIn').val());
    
    totalSalary += annualSalary;
    $('#totalMonthlyOut').empty().append(totalSalary);
    if(totalSalary >= 20000){
        addRedBackground();
    }

    $('#employeeTable').append(`
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${id}</td>
            <td>${title}</td>
            <td>${annualSalary}</td>
            <td><button class="delete">Delete</button></td>   
        </tr>
    `);
}

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