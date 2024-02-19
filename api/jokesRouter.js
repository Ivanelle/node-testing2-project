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

router.get('/:id', async (req, res, next) => {
    try {
        const joke = await Joke.findById(req.params.id)
        res.status(201).json(joke)
    } catch (err) {
        next(err)
    }
})

router.post('/', validateJoke, ratingRange, (req, res, next) => {

})

module.exports = router