const employee = {name:"John", streetAddress:"19789 Groove"}

function updateEmployeeWithKeyAndValue(employee,name,newName){
     return{...employee,[name]:newName};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, newName) {
    employee[name]=newName;
    return employee;
}

function deleteFromEmployeeByKey(employee, name) {
    const newEmployee = {...employee};
    delete newEmployee[name];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee,name){
    delete employee[name];
    return employee;
}
