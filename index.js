const express = require('express')

const app = express()

function tervita(req, res) {
    console.log(req.query)
    res.end(`
        <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <style>
                    h1 {
                    color: red;
                    }
                </style>
            </head>        
            <body>
                <h1>Tere, ${req.query.nimi} </h1>
                <p>kes hommikuti külas käib, see asjatult ei longi</p>
            </body>
        </html>
    `)
}

app.get('/tervitus', tervita)

app.listen(3050)