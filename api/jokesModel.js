const db = require('../data/dbConfig')


function find() {
    return db('jokes')
        .select('jokes_id', 'joke', 'punchline', 'rating')
    }

async function findById(jokes_id) {
    return await db('jokes')
    .select(
      'jokes_id',
      'joke',
      'punchline',
      'rating'
    )
      .where('jokes_id', jokes_id)
      .first()
  }
  // const rows = await db('users as u')
    // .leftJoin('posts as p', 'u.id', 'p.user_id')
    // .select(
    //   'u.id as user_id', 
    //   'username', 
    //   'contents', 
    //   'p.id as post_id'
    //   )
    // .where('u.id', id)

  async function add(joke) {
    const [jokes_id] = await db('jokes').insert(joke)
    return findById(jokes_id)
  }

module.exports = {
    find,
    findById,
    add
}
