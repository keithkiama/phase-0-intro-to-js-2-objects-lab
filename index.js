const employee = {name:"", streetAddress:""}

function updateEmployeeWithKeyAndValue(employee,key,value){
     return{...employee,[key]:value};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]=value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newemployee = {...employee};
    delete newemployee[key];
    return newemployee;
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}