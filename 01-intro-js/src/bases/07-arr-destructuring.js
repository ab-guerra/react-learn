const characters = ['Deku', 'Shelly', 'Dante'];

const [ ,p2 ] = characters;

console.log(p2);

const returnArray = () => ['ABC', 123];

const [ letters, numbers ] = returnArray();
console.log(letters, numbers); 


// Tarea

const testFunction = (value) => [value, () => console.log('Hola mundo')];

const [nombre, setNombre] = testFunction('Goku');
console.log(nombre);
setNombre();