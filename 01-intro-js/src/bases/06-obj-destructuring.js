const persona = {
    name: 'Tony',
    lastName: 'Stark',
    age: 45,
    rango: 'Soldado',
    nickname: 'Iron Man'
};

// const {name, lastName, age, nickname} = persona;

// console.log(name, lastName, age, nickname);

const userContext = ({name, nickname, rango = 'Capitán', age}) => {
    console.log(name, nickname, rango);
    return {
        nickname,
        age
    };
}

const avenger = userContext(persona);
const {nickname, age} = avenger;
console.log(nickname, age);