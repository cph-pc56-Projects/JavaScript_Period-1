const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('This is SpARtA!'))
app.get('/info', (req, res) => res.send('This is INFO!'))



app.post('/', (req, res) => res.send("hello from Post!"))

app.listen(3000, () => console.log('Example app listening on port 3000!'))