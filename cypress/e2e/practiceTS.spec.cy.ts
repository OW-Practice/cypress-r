

// class Point {
//     x = 0;
//     y = 0;
//   }

//   const pt = new Point();
//   console.log(pt.x, pt.y);

// class Car {

//     brand: string;
//     model: string;
//     year: number;

//     constructor(brand: string, model: string, year: number) {
//       this.brand = brand;
//       this.model = model;
//       this.year = year;
//     }
//     startEngine() {
//         console.log(`Starting the engine of ${this.brand} ${this.model}`);
//       }

//       stopEngine() {
//         console.log(`Stopping the engine of ${this.brand} ${this.model}`);
//       }
// }

// const myCar = new Car("Maru", "Model1", 2022);
// const anotherCar = new Car("Ford", "Model2", 2021);
// console.log(myCar.brand); 
// console.log(anotherCar.model);
// myCar.startEngine(); 
// anotherCar.stopEngine(); 

// class SportsCar extends Car {
//     accelerate() {
//       console.log(`Accelerating the ${this.brand} ${this.model}`);
//     }
//   }

//   const mySportsCar = new SportsCar("Ferrari", "LaFerrari", 2023);
//   mySportsCar.startEngine(); 
//   mySportsCar.accelerate(); 
/// <reference types="cypress"/>
// describe("", () => {
//     it("", () => {
//         class Students {
//             sid: number;
//             sname: string;
//             sdeptName: string;
//             //1. Assign a varaible through a method
//             displayStudent(): void {
//                 console.log(this.sid)
//                 console.log(this.sname)
//                 console.log(this.sdeptName)
//             }
//             //create an object of a class
//         }
//         var std = new Students();
//         std.sid = 1;
//         std.sname = 'Ramya';
//         std.sdeptName = 'ECE';
//         std.displayStudent()
//     })
// })

// function printMyFirstName(firstName, callback) {
//     callback(firstName)
//     console.log(firstName)
// }
// function printMySecondName(firstName, callback) {
//     let secondName = firstName + "Reddy"
//     callback(secondName)
//     console.log(secondName)
// }
// function printMyThirdName(secondName, callback) {
//     let thirdName = secondName + "Alla"
//     callback(thirdName)
//     console.log(thirdName)
// }

function printMyFirstName(firstName, callback) {
    callback(firstName, function () {
        //console.log(firstName);
    });
}

function printMySecondName(firstName, callback) {
    let secondName = firstName + "Reddy";
    callback(secondName, function () {
        //console.log(secondName);
    });
}

function printMyThirdName(secondName, callback) {
    let thirdName = secondName + "Alla";
    callback(thirdName, function () {
        //console.log(thirdName);
    });
}
// printMyFirstName("Ramya", function(firstName, done) {
//     done(); // Invoke the callback function to print the firstName
// });

// printMySecondName("Ramya", function(secondName, done) {

//     done(); // Invoke the callback function to print the secondName
// });

// printMyThirdName("Ramya Reddy", function(thirdName, done) {
//     // Perform some operations with thirdName
//     done(); // Invoke the callback function to print the thirdName
// // });
// const thirdNameCallback = function (thirdName, done) {
//     // Perform some operations with thirdName
//     done(); // Invoke the callback function to print the thirdName
// };

// const secondNameCallback = function (secondName, done) {
//     // Perform some operations with secondName
//     printMyThirdName(secondName, thirdNameCallback); // Call the next function in the tree
//     done(); // Invoke the callback function to print the secondName
// };

// const firstNameCallback = function (firstName, done) {
//     // Perform some operations with firstName
//     printMySecondName(firstName, secondNameCallback); // Call the next function in the tree
//     done(); // Invoke the callback function to print the firstName
// };

// // Example usage:
// printMyFirstName("John", firstNameCallback);

printMyFirstName("Ramya", function (firstName, done) {
    done(); // Invoke the callback function to print the firstName
    console.log(firstName);
    // Perform some operations with firstName
    printMySecondName(firstName, function (secondName, done) {
        done(); // Invoke the callback function to print the secondName
        console.log(secondName);
        // Perform some operations with secondName
        printMyThirdName(secondName, function (thirdName, done) {
            // Perform some operations with thirdName
            done(); // Invoke the callback function to print the thirdName
            console.log(thirdName);
        });
    });
});

function printMyFirstNamep1(firstName) {
    return new Promise(function(resolve, reject) {
        // Perform some operations with firstName
        resolve(firstName);
    });
}

function printMySecondNamep2(firstName) {
    return new Promise(function(resolve, reject) {
        let secondName = firstName + "Reddy";
        // Perform some operations with secondName
        resolve(secondName);
    });
}

function printMyThirdNamep3(secondName) {
    return new Promise(function(resolve, reject) {
        let thirdName = secondName + "Alla";
        // Perform some operations with thirdName
        resolve(thirdName);
    });
}

// Example usage:
printMyFirstNamep1("Ramya-Promise")
    .then(function(firstName) {
        return printMySecondNamep2(firstName);
    })
    .then(function(secondName) {
        return printMyThirdNamep3(secondName);
    })
    .then(function(thirdName) {
        console.log(thirdName); // Print the thirdName
    })
    // .catch(function(error) {
    //     console.error(error); // Handle any errors that occurred in the chain
    // });

    async function printMyFirstNamea1(firstName) {
        // Perform some operations with firstName
        return firstName;
    }
    
    async function printMySecondNamea2(firstName) {
        let secondName = firstName + "Reddy";
        // Perform some operations with secondName
        return secondName;
    }
    
    async function printMyThirdNamea3(secondName) {
        let thirdName = secondName + "Alla";
        // Perform some operations with thirdName
        return thirdName;
    }
    
    // Example usage:
    async function printNames() {
        try {
            const firstName = await printMyFirstNamea1("Ramya - Async");
            const secondName = await printMySecondNamea2(firstName);
            const thirdName = await printMyThirdNamea3(secondName);
            console.log(thirdName); // Print the thirdName
        } catch (error) {
            console.error(error); // Handle any errors that occurred
        }
    }
    
    printNames();
    
