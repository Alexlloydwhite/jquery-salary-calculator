$(document).ready(onReady);

function onReady(){
    $('#submit').on('click', handleSubmit);
}

function handleSubmit(){
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
                <td>${id}</td>
                <td>${title}</td>
                <td>${annualSalary}</td>
                <td><button class="delete">Delete</button></td>   
            </tr>
        `);
}