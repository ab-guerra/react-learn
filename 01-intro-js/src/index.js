import { heroes } from "./data/heroes";

const getHeroById = (id) => heroes.find((item) => id === item.id);



console.log(getHeroById(2));
console.log(getHeroById(1));
console.log(getHeroById(5));
console.log(getHeroById(4));
const getHeroesByOwner = (owner) => heroes.filter((hero) => owner === hero.owner);

console.log(getHeroesByOwner('DC'));