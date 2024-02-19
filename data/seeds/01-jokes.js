exports.seed = function (knex) {
    return knex('jokes').insert({
      joke: 'How do you get a tissue to dance?',
      punchline: 'You put a little boogie in it', // password "1234"
      rating: 10
    })
  };