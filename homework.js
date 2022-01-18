// //==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = { 
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell", 
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [{
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt"
    }]
}

const favoriteDishes = (person) => {
    console.log(person)
}

favoriteDishes(person3['pizza'])

// const favoriteDishes = (person) => {
//     console.log(Object.keys(person))
// }


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

function Person(name, age) {
    this.name = name;
    this.age = age;
    // Use an arrow to create the printInfo method  
    this.printInfo = () => {
        console.log(`My name is ${name} and I ${age} years old.`)
    };
    this.addAge = () => {
        age++
    };
};
const Matias = new Person('Matias', 26)
Matias.printInfo()
Matias.addAge()
Matias.printInfo()

const Lucas = new Person('Lucas', 15)
Lucas.printInfo()
Lucas.addAge()
Lucas.addAge()
Lucas.addAge()
Lucas.printInfo()