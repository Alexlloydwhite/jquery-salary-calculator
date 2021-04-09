$(document).ready(onReady);

function onReady(){
    $('#submit').on('click', handleSubmit);
    $('#employeeTable').on('click', '.delete', deleteEmployee);
}

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
    let annualSalary = $('#annualSalaryIn').val();
    
    $('#employeeTable').append(`
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            td>${id}</td>
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