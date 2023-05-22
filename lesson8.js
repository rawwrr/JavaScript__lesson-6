/* №2. Задача: изменять окончание слова в зависимости от количества: 
For example, 2 фильма, 5 фильмов, 1 фильм + 1 movie and 2 movies

getWord(2, ['фильм', "фильма", 'фильмов']) -> 2 фильма
getWord(2, ['movie', "movies"]) ->  1 movie and 2 movies
getWord(5, ['предмет', "предмета", 'предметов']) -> 5 предметов
*/

// const getWord = (number, arr) => {
//   const getWords = () => {
//     let num = Math.abs(number);
//     num = num % 100;

//     if (num >= 5 && num <= 20) {
//       return arr[2];
//     }

//     num %= 10;

//     if (num == 1) {
//       return arr[0];
//     } else if (num >= 2 && num <= 4) {
//       return arr[1];
//     }

//     return arr[2];
//   };

//   let word = getWords();

//   return `${number} ${word}`;
// };

// console.log(getWord(1, ["предмет", "предмета", "предметов"]));
// console.log(getWord(121, ["яблоко", "яблока", "яблок"]));
// console.log(getWord(111, ["фильм", "фильма", "фильмов"]));

// const getEngWord = (number, arr) => {
//   const getEngWords = () => {
//     if (number == 1) {
//       return arr[0];
//     }
//     return arr[1];
//   };
//   let word = getEngWords();

//   return `${number} ${word}`;
// };

// console.log(getEngWord(1, ["movie", "movies"]));
// console.log(getEngWord(2, ["movie", "movies"]));
// console.log(getEngWord(80, ["movie", "movies"]));

/* №3. Создать ОДНУ функцию, которая принимает объект критериев (год, название и рейтинг),  a возвращать будет массив фильмов/сериалов по трем критериям:
filterByYear + filterByTitle = one function
For example, filterShows(shows, filterCriteria);
 */

// const movies = [
//   {
//     id: 0,
//     title: "Fight Club",
//     year: 1999,
//     actors: ["Edward Norton", "Brad Pitt", "Helena Bonham Carter"],
//     description:
//       "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more",
//     details: {
//       genre: "Drama",
//       reviews: [
//         {
//           username: "Rihards",
//           content:
//             "This movie is truly masterpiece, it has a lot of small detail's, acting is on level, the story is amazing too. It has some good quotes, music is amazing it gives you that dark atmosphere which is in this movie. And it never gets old. Absolutely must see In Tyler we trust.. 10/10",
//           score: 10,
//         },
//       ],
//     },
//   },

//   {
//     id: 1,
//     title: "Wednesday",
//     year: 2022,
//     actors: ["Jenna Ortega", "Hunter Doohan", "Emma Myers"],
//     description:
//       "While attending Nevermore Academy, Wednesday Addams attempts to master her emerging psychic ability, thwart a killing spree and solve the mystery that embroiled her parents 25 years ago",
//     details: {
//       genre: "Mystery thriller",
//       reviews: [
//         {
//           username: "Rosa Parra",
//           content:
//             "Wednesday is a dark, compelling, murder mystery told brilliantly through Burton’s gothic aesthetic and style, anchored by a magnetic performance from Ortega that further cements her status as one of the best up-and-coming actresses in the industry.",
//           score: 9.5,
//         },
//         {
//           username: "Nina Metz",
//           content:
//             "It works best when it’s simply being funny. The heavy plotting around a mysterious supernatural something or other? Very, very mid, but you need something to propel the story forward enough to stretch it out for eight episodes.",
//           score: 5.5,
//         },
//       ],
//     },
//   },

//   {
//     id: 2,
//     title: "Everything Everywhere All at Once",
//     year: 2022,
//     actors: ["Michelle Yeoh", "Stephanie Hsu", "Ke Huy Quan"],
//     description:
//       "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led",
//     details: {
//       genre: "Comedy",
//       reviews: [
//         {
//           username: "Steph Cozza",
//           content: "I hope this movie exists in every alternate universe.",
//           score: 10,
//         },
//         {
//           username: "Matt Brunson",
//           content:
//             "Daniel Kwan and Daniel Scheinert not only think outside the box but outside the multiverse as well.",
//           score: 8.5,
//         },
//         {
//           username: "James Wegg",
//           content: "Laundry, taxes and life",
//           score: 6,
//         },
//         {
//           username: "Keith Garlington",
//           content:
//             "Whether its the draining exposition of the first half or the smothering non-stop ridiculousness of the second half, the film never finds a good balance.",
//           score: 3,
//         },
//       ],
//     },
//   },
// ];

// function getFilm(arr, filterCriteria) {
//   let lowCaseTitle = filterCriteria.title.toLowerCase();
//   let criteriaYear = filterCriteria.year;
//   let criteriaScore = filterCriteria.score;

//   let filteredFilm = arr.filter((arrMovie) => {
//     let num = 0;

//     arrMovie.details.reviews.forEach((el) => {
//       num += el.score;
//     });

//     num /= arrMovie.details.reviews.length;

//     return (
//       criteriaYear <= arrMovie.year &&
//       arrMovie.title.toLowerCase().includes(lowCaseTitle) &&
//       num >= criteriaScore
//     );
//   });

//   return filteredFilm;
// }

// const filtersCriteria = { year: 1999, title: "fi", score: 3 };
// console.log(getFilm(movies, filtersCriteria));

/* №4. Задача: через prompt юзер вводить число от 0 до 100 (включительно).
Если число в промежутке [0 - 40], отдаем строку “You failed the exam, try again”
Если число в промежутке [41 - 70], отдаем строку “You passed the exam, but you have to attend additional classes”.
Если число в промежутке [71 - 100], отдаем строку “You passed the exam, get some rest before the next one”.
Если число не входит ни в один промежуток, то отдаем “The number must be from 0 to 100”
Если это не число, то отдаем “It must be a number”
*/

// let scoreNum = prompt("Введите свою оценку:");

// if (scoreNum >= 0 && scoreNum <= 40) {
//   alert("You failed the exam, try again");
// } else if (scoreNum >= 41 && scoreNum <= 70) {
//   alert("You passed the exam, but you have to attend additional classes");
// } else if (scoreNum >= 71 && scoreNum <= 100) {
//   alert("You passed the exam, get some rest before the next one");
// } else if (scoreNum < 0 || scoreNum > 100) {
//   alert("The number must be from 0 to 100");
// } else {
//   alert("It must be a number");
// }

// console.log(scoreNum);

/*
 * Создайте функцию, которая принимает строку и возвращает true, если строка является палиндромом (читается одинаково вперед и назад), в противном случае false.
 */

const palindrom = (word) => {
  word = word.toString().toLowerCase();
  return word === word.split("").reverse().join("");
};

console.log(palindrom("ABBA"));
