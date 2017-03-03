/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var people = ["Lars", "Bo", "William", "Haakon", "Frederik", "Thomas", "Hej"];

var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

function returnVolvo(car){
    return car.year > 1999 && car.make === 'Volvo' && car.price < 5000;
}

function checkNameLength(name){
    return name.length < 3;
}

var peopleLowLength = people.filter(checkNameLength);

var volvoArr = cars.filter(returnVolvo);

var htmlArr = people.map(function(name){
    return "<li>" + name + "</li>";
});

var arr = "<ul>" + htmlArr.join() + "</ul>"; 

console.log(arr);

people.forEach(function(getName){
   console.log(getName); 
});

peopleLowLength.forEach(function(getName){
   console.log(getName); 
});

function Person(name){
  this.name = name;
  console.log("Name: "+ this.name);
  setTimeout(function(){
    console.log("Hi  "+this.name);  //Explain this
  },2000);
  };

Person("Kurt Wonnegut");  //This calls the function
console.log("I'm global: "+ name);  //Explain this
