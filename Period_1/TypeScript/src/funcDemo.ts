function hello(firstName: string, lastName: string, role?: string) {
    let temp = `Hello ${firstName} ${lastName}`
    temp += (role) ? " your role is: " + role +"." : ".";
    console.log(temp);
}

class Person {
    private fName: string;

    constructor(fName: string, lName: string) {
        this.fName = fName;
        this.lName = lName;
    }

    sayHelloEventually() {
        setTimeout(() => {
            console.log(`Hi ${this.fName} ${this.lName}`);
        }, 3000)
    }
}

let p = new Person("Petru", "Catana");
p.sayHelloEventually();