interface IPerson {
    readonly id: number;
    firstName: string;
    lastName: string;
    email: string;
    landLine?: string; // '?" Means it's optional
}

function personLogger(person: IPerson) {   
    const str = `
        ********************
        ID: ${person.id}
        Name: ${person.firstName} ${person.lastName}
        PHONE: ${person.landLine}
        ********************
    `;
    return str;
}

let p1: IPerson = {
    id: 1, 
    firstName: "Kurt", 
    lastName: "Wuggenut",
    email: "bla@bla",
    landLine: "1212121"
}
console.log(personLogger(p1));