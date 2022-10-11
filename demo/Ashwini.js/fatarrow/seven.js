let emp = {
    id: 101,
    name: "Rahul",
    sal: 45000
}
console.log(emp)
//reading object properties 
console.log(emp.id)
console.log(emp.name)
console.log(emp.sal)
console.log(emp.email)
//update 
emp.name = "Rahul Gadnhi"
console.log(emp)
emp.loc = "Jodo Yatra"
console.log(emp)
delete emp.sal
console.log(emp)