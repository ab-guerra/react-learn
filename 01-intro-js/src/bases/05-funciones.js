/**
 * Funciones 
*/ 
function sayHi(name) {
    return `Hola, soy ${name}`;
}

const salute = (name) => `Hola, soy ${name}`;
console.log(sayHi('Goku'));

console.log(salute('Baruch'));

function getActiveUser(name) {
    return {
        uid: 'ABC123',
        username: name,
    };
}

const getActiveUserV2 = (name) => ({uid: '123ABC', username: name});

console.log('Funcion uno: ', getActiveUser('Jesús'));

console.log('Función dos: ', getActiveUserV2('Shelly'));