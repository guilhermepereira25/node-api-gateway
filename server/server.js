import express from 'express'
import httpProxy from 'express-http-proxy'
import {USERS_API_URL, PRODUCTS_API_URL} from '../server/URLs.js'

const app = express()
const port = 3000

const userServicesProxy = httpProxy(USERS_API_URL)
const productsServicesProxy = httpProxy(PRODUCTS_API_URL)

app.get('/', (req, res) => res.send('Hello, World'))

app.get('/users', (req, res, next) => userServicesProxy(req, res, next))

app.get('/products', (req, res, next) => productsServicesProxy(req, res, next))

app.listen(port, () => {
  console.log(`Server listening in ${port}`)
})