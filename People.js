class People {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.pet = []
    }

    tellYourName() {
        console.log(`My name is ${this.name}.`);
    }

    addPet(type,name) {
        this.pet.push(new Animal(type,name));
    }
}