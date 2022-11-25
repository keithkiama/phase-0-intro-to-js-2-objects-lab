const employee = {name:"John", streetAddress:"19789 Groove"}

function updateEmployeeWithKeyAndValue(employee,name,newname){
     return{...employee,[name]:newname};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, newname) {
    employee[name]=newname;
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
