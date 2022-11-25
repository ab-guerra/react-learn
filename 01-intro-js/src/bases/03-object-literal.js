const person = {
    name: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        city: 'New York',
        zip: 1010,
        lat: Math.PI,
        lng: Math.E,
    },
};


// Cloning object
const person2 = { ...person };
person2.name = 'Peter';
person2.lastName = 'Parker';
person2.age = 25;
console.table(person);
console.table(person2);