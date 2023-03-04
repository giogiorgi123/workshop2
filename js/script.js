// დავალება 1-2
let car = {
    color:"red",
    manufacturer:"mercedes",
    model:"gl",
    engine:5.5,
};
console.log(car);
console.log(car.model,car.color);
delete car.engine
car.owner = "qarumidze"
console.log(car);

// დავალება 3
let names = ["giorgi","salome","david","mari","ana"]
console.log(names);
console.log(names[2]);
names.push("amirani")
console.log(names);
names.shift();
console.log(names);