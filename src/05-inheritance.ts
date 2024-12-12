export class animal {

    constructor(protected name: string) {

    }

    move() {
        console.log(`The ${this.name} is moving`);
    }

    greeting() {
        console.log(`Hello, I'm ${this.name}`);
    }

    protected sleep() {
        console.log(`The ${this.name} is sleeping`);
    }

    public set setName(value: string) {
        this.name = value;
    }

    public get getName(): string {
        return this.name;
    }
}

export class grupoAnimal extends animal {
    constructor(
        name: string,
        private tipo: string) {
        super(name);
    }

    eat() {
        console.log(`He is a ${this.name} and he is ${this.tipo}, he is eating`);
        this.sleep();
    }
    
    public set setName(value: string) {
        this.name = value;
    }

    public get getName(): string {
        return this.name;
    }

    public set setTipo(value: string) {
        this.tipo = value;
    }

    public get getTipo(): string {
        return this.tipo;
    }
}

console.log('Animal class loaded');
console.log('-------------------');
const mamifero = new animal('Felino');
mamifero.greeting();
mamifero.move();
mamifero.getName;
mamifero.setName = 'Canino';
mamifero.greeting();
mamifero.move();
console.log('-------------------');
const carnivoro = new grupoAnimal('Lion', 'Carnivore');
carnivoro.eat();
carnivoro.move();
carnivoro.eat();
carnivoro.setName = 'Crocodile';
carnivoro.setTipo = 'Reptile';
carnivoro.eat();

