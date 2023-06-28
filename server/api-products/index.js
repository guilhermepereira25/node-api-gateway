import express  from 'express'

const app = express()

app.get('/products', (req, res) => res.send('Hello, World'))

app.listen(3002, () => console.log('Products api listening on port 3002'))