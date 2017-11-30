const ud = require('urban-dictionary')

ud.random(function(error, entry) {
    if (error) {
        console.error(error.message)
    } else {
        console.log(entry.word)
        console.log(entry.definition)
        console.log(entry.example)
        console.log(entry.permalink)
    }
})