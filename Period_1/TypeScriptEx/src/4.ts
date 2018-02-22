interface myFunction {
    (first: string, second: string, third: string): Array<string>
}
let theFunction: myFunction = function(first: string, second: string, third: string) {
    let array: Array<string> = [];
    array.push(first);
    array.push(second);
    array.push(third);
    return array.map(x => x.toUpperCase());
}

let f2 = function logger(f1: myFunction) {

    let [a, b , c] = ["A", "B", "C"];
    console.log(f1(a, b, c));
}

