const person = {
  fullName: "Max",
  age: 66,
  place: {
    country: "Rissia",
    city: "Адищево",
  },
  hasCats: true,
  hobbies: ["JavaScrip", "Movies", "Cats"],
  greeting: function () {
    return "Hey, my name is " + this.fullName;
  },
};

console.log(person.greeting());

const myPerson = {
  ...person,
  occupation: {
    profession: "Developer-buttonpusher",
    hobby:
      "Creating unique mixed drinks using unusual ingredients such as boiled onions or pickles.",
    favoriteFilm: "Ski Fighter",
    favoriteNumber: 666,
  },
};

console.log(myPerson.occupation);

const textInConsole = document.querySelector("h1");
textInConsole.textContent = myPerson.occupation.hobby;
