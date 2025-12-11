// let arr=[1,2,3];
// let arr2=[4,5,6];
// arr.sayHello=()=>{
//     console.log("hello,i am arr");
// };
// arr2.sayHello=()=>{
//     console.log("hello,i am arr");
// }

// // constructors-doesn't return anything & start with capital letter
// function Person(name,age){
//     this.name=name;
//     this.age=age;
// }

// Person.prototype.talk=function(){
//     console.log(`hi, my name is ${this.name}`);
// };
//  // creating object for constructor 
//  let p1=new Person("adam",25);
//  let p2=new Person("eve",45);
// console.log(p1);

// //  classesin js 
// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     talk(){
//         console.log(`hi,my name is ${this.name}`);
//     }
// }
// let p1=new Person("eve",45);
// let p2=new Person("piyush",78);
// console.log(p1);

// // inheritance
class Person{//base class
    constructor (name,age){
                console.log("person class constructor");
        this.name=name;
        this.agr=age;
    }
    talk(){
        console.log( `hey  I Am ${this.name}`);
    }
}
class Student extends Person{//child class
    constructor(name,age,marks){
        console.log("student class constructor");
        super(name,age);// parent class constructor is begin called
        this.marks=marks;
    }
}

class Teacher extends Person{
    constructor(name,age,subject){
        super(name,age)// parent class constructor is begin called
        this.subject=subject;
    }
}

let s1=new Student("piyush",45,12);
console.log(s1);
console.log(s1.marks);
console.log(s1.talk());

let t1=new Teacher("tacher",45,"english");
console.log(t1);
console.log(t1.name);
console.log(t1.talk());