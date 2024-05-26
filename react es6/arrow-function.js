hello = function() {
    return 'Hello World!';
}
console.log(hello());

hello = () => "Hello World2!";
console.log("hello2: ", hello());

hello = (val) => "Hello " + val;
console.log("hello3: ", hello("An handsome"));

hello = val => "Hello " + val;
console.log("hello4: ", hello("Bom handsome"));

class Header {
    constructor() {
        this.color = "Red";
    }
    print = () => this;
    print2() {
        return this;
    }
}
const header = new Header();
console.log(header.print());
console.log(header.print2());
console.log();