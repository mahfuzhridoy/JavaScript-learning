const person1 = {
  name: "Rahim",
  sayHello: function() {
    console.log("Hello " + this.name);
  }
};

const person2 = {
  name: "Karim",
  sayHello: function() {
    console.log("Hello " + this.name);
  }
};

person1.sayHello(); // Hello Rahim
person2.sayHello(); // Hello Karim