//DECLARING STUDENT CLASS
const Student = class {
    constructor(Name, Usn,Mark1, Mark2, Mark3){
        this.Name = Name
        this.Usn = Usn
        this.Mark1= Mark1
        this.Mark2 = Mark2
        this.Mark3 = Mark3
    }
     getFinalmarks(){
      const cs = this.Mark1
      const iot = this.Mark2
      const py = this.Mark3
      const value = (cs + iot + py)/3
      return value 
    } 
    get getUsn(){
        return this.Usn
    } 
}

const Student1 = new Student('Shravya','4SF18CS141',23,45,64)
const Student2 = new Student('Karthik', '4SF18CS057', 45,60,90)
const Student3 = new Student('Shraddha','4SF18CS129',35,89,70)


const value = Student.prototype.getStudentMarks = (getingusn)=>{
    getingusn =  Student1.getUsn
    if(getingusn==="4SF18CS141"){
        //return callback(Student2.getFinalmarks())
        return Student1.getFinalmarks()
    }   
      
}
const value1 = Student.prototype.getStudentMarks()



//Declaring Collage class
const Collage = class {
    constructor(stud = Student1){
       // this.CollageId = CollageId
        if(stud.Usn === "4SF18CS141"){
            console.log("Total Marks of Student Bearing USN "+ stud.Usn +" is: " + value1)
        }else{
            console.log('Invalid User OR Enter USN properly')
        }
    } 
}
const Collage1 = new Collage()


// const University = class {
//     constructor(Universit = Collage){
//        return Universit.sendDetails
//     }
    
// }
// const University1 = new University()
// console.log(University.Universit)





//console.log(Collage.getStudentMarks)





