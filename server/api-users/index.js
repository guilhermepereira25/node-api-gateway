import express  from 'express'

const app = express()

app.get('/users', (req, res) => res.send('Hello, World'))

app.listen(3001, () => console.log('Users api listening on port 3001'))