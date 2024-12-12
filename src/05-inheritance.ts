export class animal {

    constructor(protected name: string) {

    }

    move() {
        console.log(`The ${this.name} is moving`);
    }

    greeting() {
        console.log(`Hello, I'm ${this.name}`);
    }
}

export class grupoAnimal extends animal {
    constructor(
        public name: string,
        public tipo: string) {
        super(name);
    }

    eat() {
        console.log(`He is a ${this.name} and he is ${this.tipo}, he is eating`);
    }
}

console.log('Animal class loaded');
console.log('-------------------');
const mamifero = new animal('Felino');
mamifero.greeting();
mamifero.move();
console.log('-------------------');
const carnivoro = new grupoAnimal('Lion', 'Carnivore');
carnivoro.greeting();
carnivoro.move();
carnivoro.eat();
carnivoro.name = 'Crocodile';
carnivoro.tipo = 'Reptile';
carnivoro.eat();

