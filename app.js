///// object inherit from other object ::: 


// const Person =  {
// calcAge  () {
//     console.log(2024 - this.birthYear)
// } ,
   

// init (firstName , lastName , birthYear ){
//   this.firstName = firstName ; 
//   this.lastName = lastName ;
//   this.birthYear = birthYear ;
// }
// }


// const steven = Object.create(Person)
// // steven.firstName = "steven" ; 
// // steven.lastName = "shmedtman" ; 
// // steven.birthYear = 1990 ; 
// steven.init("steven" , "lasssj" , 1996)

// console.log(steven)
// console.log(steven.calcAge())

 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///// class inheritance from another class  ::: 
//// PersonCl ===> parent class . 
///// Student ===> child class . 
// class PersonCl {
//     constructor (firstName , lastName){
//   this.firstName = firstName ; 
//   this.lastName = lastName ;
//     }

//     introduce (){
//         console.log(`my name is ${this.firstName} and i study ${this.courses} `)
//     }
// }


// class Student extends PersonCl {
//     constructor (firstName , lastName , courses) {
//         super (firstName , lastName)
//         this.courses = courses ;
       
//     }

// }

// const martha = new Student ("Martha" , "jonas" , "computer scinece") ; 
// console.log(martha.introduce())

/////// 

class Account {
    ///// public fields :: 
     movements = [] ;
     locate = navigator.language

     //// Private fields :: 
        #pin ;  
    constructor (owner , currency , pin  ){
        this.owner = owner ; 
        this.currency = currency ;
        this.#pin = pin
        // this._pin = pin ;
        // this.movements = [] ;
        
    }


    getMovements (){
        return this.movements
    }

 deposit (val){
  this.movements.push(val)
  return this ;
 } ; 
 widhdraw (val){
//    this.movements.push(-val)
    this.deposit(-val)
    return this ; 
 }

  approveLoan (){
    return true ; 
  }

  requestLoan (val){
  if (this.approveLoan){
   this.deposit(val)
   console.log("loan approved !!! ")
   return this ; 
  }
  }

}

const acc1 = new Account ("jonas" , "EUR" , 1111 ) ; 

// acc1.movements.push(200) ; 
// acc1.movements.push(450) ;
// acc1.movements.push(-500) ; 
acc1.deposit(800)
acc1.deposit(600)
acc1.deposit(300) ;
acc1.widhdraw(100)
acc1.widhdraw(900)
// acc1.#requestLoan(5000) ; 
console.log(acc1)
console.log("movements :"  ,acc1.movements) ; 
// console.log(acc1.#pin)

acc1.deposit(200).widhdraw(300).requestLoan(500).widhdraw(900) ; 

console.log(acc1.getMovements())
