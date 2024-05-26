/**
 * - The Javascript spread operator (...) allows us to quickly copy all or part of an exsting array or object into another array of object
 */

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const total = [...a1, ...a2];

//- combination with destructuring

const [one, two, ...rest] = total;

console.log(one, two, rest); // 1 2 [3, 4, 5, 6]

// comnine these two objects
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { d: 4, e: 5, f: 6 };

const objTotal = {...obj1, ...obj2};

console.log(objTotal);


const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
  
    console.log(myUpdatedVehicle); 