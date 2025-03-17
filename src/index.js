// //var, let, const
// //type of scope
// //global scope
// //local scope
// var a=90
// console.log(a)
// //terminal cmd: node index.js
// //redeclaration
// //reassignment
// //hoisting
// //Var declaration
// //Types of scope
// var globalVar='I am global'
// console.log(globalVar)
// function localVar(){
//     var localVar1= 'Im local with var'
//     console.log(localVar1)
//     console.log(globalVar)
// }
// //console.log(localVar1)
// localVar()

// //redeclaration in var

// function reDec(){
//     var t=232
//     var t=23;
//     console.log(t) //redeclaration is possible with var declaration
// }
// reDec()

// //reassignment in var
// function reAssign(){
//     var b=34
//     console.log(b)
// }
// reAssign()

// //hoisting in var
// function Hois(){
//     console.log('before declaration',k)
//     var k=34434
//     console.log('after declaration',k)
// }
// Hois()

// //let declaration
// let globalLet='i m global Let'
// console.log(globalLet)
// function globalLetFun(){
//     let localLet='i m local let'
//     console.log(localLet)
// }
// globalLetFun()

// //const declaration
// const globalLet1='i m global Let'
// console.log(globalLet1)
// function globalLetFun1(){
//     let localLet1='i m local let'
//     console.log(localLet1)
// }
// globalLetFun1()

// //let redeclaration
// function j(){
//     let h=3
//     //let h=343;
//     console.log(h)
// }
// j()


// //reassignment
// function reAssignByLet(){
//     let y=4
//     y=43
//     console.log(y)
// }
// reAssignByLet()

// //const redeclaration
// function constReDec(){
//     const d=43
//     //const d=234
//     console.log(d)
// }
// constReDec()

// //reassignmet
// function c(){
//     const i=34
//     //i=23 error not possible
//     console.log(i)
// }
// c()


// //gor hoisting not possible with let and const

// //datatypes
// let number=23
// let name='test'
// let isActive=true
// let user=null
// let age;
// let person={
//     name1: 'test',
//     age:32
// }
// let num=[2,2,3]
// console.log('data type', typeof(number))

//operator
let a1=34
let b1=40
//arithmetic operator
let c1=a1+b1
let d1=a1-b1
let e1=a1*b1
console.log(c1)
console.log(d1)
console.log(e1)

let num1=10;
let num2=5;
console.log('Add', num1+num2)
console.log('Multiplication', num1*num2)
console.log('Sub', num1-num2)
console.log('Division', num1/num2)
console.log('Mod', num1%num2)
console.log('power', num1**num2)

//comparison operator
console.log('greater than: ',num1>num2)
console.log('less than: ',num1<num2)
console.log('equal to: ',num1==num2)

//>=, <=, ===
console.log('greater than equal to: ',num1>=num2)
console.log('less than equal to: ',num1<=num2)
console.log('===: ',num1===num2)

//logical operator
let isEven= num1%2==0;
let isPositive= num1>0;
console.log('is even & positive: ', isEven && isPositive)
console.log('is even or positive: ', isEven || isPositive)

//assignment operator
let result= num1;
result+=20;
console.log('after adding 20: ',result)

//bitwise operator

//loop
for(let i=0; i<3; i++){
    console.log('number: ',i)
}

//while loop
let count=3;
while(count>3){
    console.log('count: ',count)
    count--;
}

//do-while loop
// let x=0;
// do{
//     console.log('do while: ',x)
//     x++;

// }while(x<3)



let attendance=75;
if(attendance>=90){
    console.log('Grade A')
}else if(attendance>=80){
    console.log('Grade B')
}else if(attendance>=70){
    console.log('Grade C')
}else{
    console.log('fail')
}


//switch statement
let day='Tuesday'
switch(day){
    case 'Monday':
        console.log('First day')
        break;
    case 'Tuesday':
        console.log('second day')
        break;
    case 'Wednesday':
        break;
    default:
        console.log('some other day')
}


