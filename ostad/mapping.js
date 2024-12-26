function mapping(expectedModel){
const car ={
    CarA:{
    color:"black",
    wheel:4,
    model:"hundai",

},
CarB:{
    color:"white",
    wheel:6,
    model:"Toyota",

},

};
//console.log(car[CarA].model);
//const carKey= Object.keys(car).find((key) => car[key].model===expectedModel);
//const carKey= Object.values(car).find((car) => car.model===expectedModel);
const carKey= Object.keys(car).filter((key) => car[key].model===expectedModel);
console.log(carKey);

}
mapping("Toyota");