const express = require('express')
const app = express()
const fs = require('fs')

const {
    Client
} = require('pg')

const client = new Client({
    user: 'doadmin',
    host: 'db-postgresql-fra1-75444-do-user-6061744-0.db.ondigitalocean.com',
    database: 'myPool',
    password: 'sjdbntbrc26pgnjm',
    port: 25061,
    ssl: true
})

client.connect()

app.get('/', async (req, res) => {
    const { rows } = await client.query('SELECT * FROM users')
    res.json(rows)
})

app.listen(4000)