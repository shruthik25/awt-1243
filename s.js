class student {
    constructor(name) {
        this.name = name;
    }
    display() {
        console.log("Student name from parent class" + this.name);
    }
}
class Student1 extends student {
    constructor(name, rollno) {
        super(name);
        this.rollno = rollno;
    }
    display() {
        super.display();
        console.log("Student name from child class" + this.name + " " + this.rollno);
    }

}
let s = new Student1("abc", 123);
s.display();