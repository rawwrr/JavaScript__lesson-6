const movies = [
  {
    id: 0,
    title: "Fight Club",
    year: 1999,
    actors: ["Edward Norton", "Brad Pitt", "Helena Bonham Carter"],
    description:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more",
    details: {
      genre: "Drama",
      reviews: [
        {
          username: "Rihards",
          content:
            "This movie is truly masterpiece, it has a lot of small detail's, acting is on level, the story is amazing too. It has some good quotes, music is amazing it gives you that dark atmosphere which is in this movie. And it never gets old. Absolutely must see In Tyler we trust.. 10/10",
          score: 10,
        },
      ],
    },
  },

  {
    id: 1,
    title: "Wednesday",
    year: 2022,
    actors: ["Jenna Ortega", "Hunter Doohan", "Emma Myers"],
    description:
      "While attending Nevermore Academy, Wednesday Addams attempts to master her emerging psychic ability, thwart a killing spree and solve the mystery that embroiled her parents 25 years ago",
    details: {
      genre: "Mystery thriller",
      reviews: [
        {
          username: "Rosa Parra",
          content:
            "“Wednesday” is a dark, compelling, murder mystery told brilliantly through Burton’s gothic aesthetic and style, anchored by a magnetic performance from Ortega that further cements her status as one of the best up-and-coming actresses in the industry.",
          score: 9.5,
        },
        {
          username: "Nina Metz",
          content:
            "It works best when it’s simply being funny. The heavy plotting around a mysterious supernatural something or other? Very, very mid, but you need something to propel the story forward enough to stretch it out for eight episodes.",
          score: 5.5,
        },
      ],
    },
  },

  {
    id: 2,
    title: "Everything Everywhere All at Once",
    year: 2022,
    actors: ["Michelle Yeoh", "Stephanie Hsu", "Ke Huy Quan"],
    description:
      "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led",
    details: {
      genre: "Comedy",
      reviews: [
        {
          username: "Steph Cozza",
          content: "I hope this movie exists in every alternate universe.",
          score: 10,
        },
        {
          username: "Matt Brunson",
          content:
            "Daniel Kwan and Daniel Scheinert not only think outside the box but outside the multiverse as well.",
          score: 8.5,
        },
        {
          username: "James Wegg",
          content: "Laundry, taxes and life",
          score: 6,
        },
        {
          username: "Keith Garlington",
          content:
            "Whether it’s the draining exposition of the first half or the smothering non-stop ridiculousness of the second half, the film never finds a good balance.",
          score: 3,
        },
      ],
    },
  },
];

const cinema = movies.forEach((movie) => {
  const result =
    movie.details.reviews.reduce((a, b) => a + b.score, 0) /
    movie.details.reviews.length;

  const actorsList = movie.actors.join(", ");

  console.log(
    `The ${movie.year} film “${movie.title}”, which tells the story of “${
      movie.description
    }”.
  This movie starred ${actorsList}. It was rated by ${
      movie.details.reviews.length
    } users, with a total rating of ${result.toFixed(
      1
    )}. Register to watch this ${movie.details.genre}.`
  );
});
