class Person {
    private static nextId: number = 100;
    private readonly id:number;
    private _name: string; // _name  "_" indicates that is private

    constructor(name: string, private email:string) {
        this.id = Person.nextId++;
        this._name = name;
    }

    get getId() {
        return this.id;
    }

    get getName() {
        return this._name;
    }

    set setName(name:string) {
        this._name = name;
    }
}

let p2: Person = new Person("Peter", "pet@cat.com");
console.log(`Name: ${p2.getName}, ID: ${p2.getId}`);
let p3: Person = new Person("Jack", "pet@cat.com");
console.log(`Name: ${p3.getName}, ID: ${p3.getId}`);
export{};