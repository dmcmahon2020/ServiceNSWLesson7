// Getters and Setters

// class Person {
//     constructor(name, age, heightInMm) {
//         this.name = name;
//         this.age = age;
//         this.heightInMm = heightInMm;
//     }

//     get heightInInches() {
//         return this.heightInMm / 25.4;

//     }

//     set heightInInches(value) {
//         this.heightInMm = value * 25.4;
//     }


// //     get heightInCm() {
// //         return this.heightInMm / 10;
// //     }


// }

// let me = new Person("Damon", 28, 1760);
// console.log(me);
// console.log(me.heightInInches);
// // console.log(me.heightInCm);

// me.heightInInches = 72;
// console.log(me.heightInInches);



//  

class Pet {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }

    getInfo() {
        return `${this.name} the ${this.species} is ${this.age} years old.`
    }

}

class Dog extends Pet {
    constructor(name, age, species, breed) {
        super(name, age, species);
        this.breed = breed;

    }

    getInfo() {
        return `${this.name} the ${this.species} is ${this.age} years old.`
    }
    getBreedInfo() {
        return `${this.name} is a ${this.breed}.`;
    }
}

let cat = new Pet("Conan", 2, "Cat");
let dog = new Dog("Buddy", 8, "Dog", "Staffy");
let mouse = new Pet ("Cherry Berry", 1, "Mouse");
let kangaroo = new Pet("Skippy", 6, "Kangaroo");


console.log(cat.getInfo());
console.log(dog.getInfo());
console.log(dog.getBreedInfo());
console.log(mouse.getInfo());
console.log(kangaroo.getInfo());





