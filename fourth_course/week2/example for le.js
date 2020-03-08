function Student(name) {
    this.name = name;
}

Student.prototype.constructor === Student; // true
var billy = new Student('Billy');
console.info(billy.constructor.name); // Student