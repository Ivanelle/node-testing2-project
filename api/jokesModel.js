const db = require('../data/dbConfig')


function find() {
    return db('jokes')
        .select('jokes_id', 'joke', 'punchline', 'rating')
    }

function findById(joke_id) {
    return db('jokes')
      .where('jokes_id', joke_id)
      .first()
  }
  
  async function add(joke) {
    const [id] = await db('jokes').insert(joke)
    return findById(id)
  }

module.exports = {
    find,
    findById,
    add
}
