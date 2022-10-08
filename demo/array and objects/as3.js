var students=[
    {id:101,name:"anu",locallity:'madurai'},
    {id:102,name:"adlin",locallity:'ooty'},
    {id:103,name:"guru",locallity:'coimbatore'},
    {id:104,name:"jp",locallity:'kovilpatti'},
]

//print array as it is
console.log(students);
//print elements
for(elements of students){
    console.log(elements);
}


//pop

students.pop();
console.log(students);


//push
students.push( {id:105,name:"raghul",locallity:'mysur'});
console.log(students);

//unshift
students.unshift({id:107,name:"gokul",locallity:'nepal'},)
console.log(students);

//shift
students.shift();
console.log(students);

//2D array
 const row=10
 const column=12

 const demoArray=[];

for(let i=0;i<column;i++){
    demoArray[i]={a:1}
}
console.log(demoArray);