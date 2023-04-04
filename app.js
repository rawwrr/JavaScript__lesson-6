const person = {
  fullName: "Max",
  age: 66,
  country: "Rissia",
  hasCats: true,
  hobbies: ["JavaScrip", "Movies", "Cats"],
  greeting: function () {
    return "Hey, my name is " + person.fullName;
  },
};

console.log(person.greeting());

const myPerson = { ...person };
myPerson.occupation = {
  gamer: true,
  philanthropist: false,
  billionaire: null,
};

console.log(myPerson.occupation);
