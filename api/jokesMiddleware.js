const Joke = require('./jokesModel')

function validateJoke (req, res, next) {
    const { joke, punchline } = req.body
    if(!joke || !punchline) {
        res.status(422).json({
            message: 'Joke AND Punchline required'
        })
    } else {
        next()
    }
}

async function ratingRange (req, res,next) {
    const { rating } = req.body
    try {
        if (rating < 0 || rating > 10) {
            res.status(422).json({
                message: 'Rating cant be less than 0 or more than 10'
            })
        } else {
            next()
        }

    } catch(err) {
        next()
    }

  
}


module.exports = {
    validateJoke,
    ratingRange
}