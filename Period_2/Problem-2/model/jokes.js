var _jokes = [
    "A day without sunshine is like, night.",
    "At what age is it appropriate to tell my dog that he's adopted?",
    "I intend to live forever, or die trying"
];

function _getRandomJoke() {
    var max = _jokes.length;
    var rnd = Math.floor(Math.random() * Math.floor(max));
    return _jokes[rnd];
}

function _addJoke(joke) {
    _jokes.push(joke);
}

function _allJokes() {
    return _jokes;
}

module.exports = {
    allJokes : _allJokes,
    getRandomJoke: _getRandomJoke,
    addJoke: _addJoke
}
