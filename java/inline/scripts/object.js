let cat = {name : "lucy", color: "golden brown", age:3};
let dog = new Object();
dog.bread ="husky";
dog.name = "jacky";
dog.isVaccinated = true;

// let dog= {bread:"husky", name:"jacky", isVaccinated:true};

document.getElementById("para1").innerHTML = "bread: "+ dog.bread + "<br>name: " +dog["name"] + "<br>vacinated: " +dog.isVaccinated;

delete dog.isVaccinated;
console.log(dog);

dog.age = 5;
console.log(dog);

const person = {
    fname:"Sangay ",
    lname:"Eden",
    age : 20,
    fullname: function fullname() {
        return this.fname + "" + this.lname
    }
};
document.getElementById("para1").innerHTML=person.fullname();

let x = 5;
let y = 8;
document.getElementById("para1").innerHTML= x * y;

