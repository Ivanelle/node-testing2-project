const router = require('express').Router()
const Joke = require('./jokesModel')
const { validateJoke, ratingRange } = require('./jokesMiddleware')

router.get('/', (req, res, next) => {
    Joke.find()
    .then(jokes => {
        res.json(jokes)
    })
    .catch(next)
})

router.get('/:joke_id', (req, res, next) => {

})

router.post('/', validateJoke, ratingRange, (req, res, next) => {

})

module.exports = router