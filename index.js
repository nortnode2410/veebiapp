const express = require('express')
const ejs = require('ejs')
const path = require("path")

const app = express()

const matk1 = {
    nimetus: "Sügismatk Kõrvemaal",
    pildiUrl: "/static/asset/maed.png",
    kirjeldus: "Lähme ja oleme kolm päeva looduses",
    osalejad: ["mati@matkaja.ee", "kati@matkaja.ee"]
}

const matk2 = {
    nimetus: "Süstamatk Hiiumaal",
    pildiUrl: "/static/asset/maed.png",
    kirjeldus: "Lähme ja oleme kolm päeva vee peal",
    osalejad: ["mati@matkaja.ee", "kati@matkaja.ee", "uudo@ryhkija.ee"]
}

const matkad = [
    matk1,
    matk2,
    {
        nimetus: "Mägimatk Otepääl",
        pildiUrl: "/static/asset/maed.png",
        kirjeldus: "Lähme ja oleme kolm päeva mägedes",
        osalejad: ["uudo@ryhkija.ee"]
    }
]


function tervita(req, res) {
    console.log(req.query)
    res.end(`
        <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <link rel="stylesheet" href="/static/style.css">
            </head>        
            <body>
                <h1>Tere, ${req.query.nimi} </h1>
                <p>kes hommikuti külas käib, see asjatult ei longi</p>
                <img class="maed" src="/static/asset/maed.png" />
                <p>test test</p>
            </body>
        </html>
    `)
}

function palavTervitus(req, res) {
    const parameetrid = { isik:  req.query.nimi }
    res.render("palavtervitus", parameetrid)
}

function naitaMatkad(req, res) {
    res.render("matkad", {matkad: matkad})
}

app.use('/static', express.static("public"))
app.use(express.json())

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.get('/tervitus', tervita)
app.get('/palavtervitus', palavTervitus)
app.get('/matkad', naitaMatkad)

app.listen(3050)