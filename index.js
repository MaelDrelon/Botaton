const express = require('express')
const app = express()
const Formation = require('./Formation.json')
const Lieu = require('./Lieu.json')
const tarif = require('./tarif.json')
const contact = require('./contact.json')
const inscription = require('./inscription.json')
const dateJPO = require('./date-jpo.json')

// Middleware
app.use(express.json())



//A Modifier les ID

app.get('/Formation', (req,res) => {
    res.status(200).json(Formation)
})

app.get('/Formation/:slug', (req,res) => {
    const slug = req.params.slug
    const Format = Formation.find(Formation => Formation.slug === slug)
    res.status(200).json(Format)
})

app.get('/Lieu', (req,res) => {
  res.status(200).json(Lieu)
})

app.get('/Lieu/:Ville', (req,res) => {
  const Ville = req.params.Ville
  const Lieu = Lieu.find(Lieu => Lieu.Ville === Ville)
  res.status(200).json(Lieu)
})

app.get('/tarif', (req,res) => {
  res.status(200).json(tarif)
})

app.get('/tarif/:statue', (req,res) => {
  const statue = req.params.statue
  const tari = tarif.find(tarif => tarif.statue === statue)
  res.status(200).json(tari)
})

app.get('/inscription', (req,res) => {
  res.status(200).json(inscription)
})

app.get('/inscription/:slug', (req,res) => {
  const slug = req.params.slug
  const inscri = inscription.find(inscription => inscription.slug === slug)
  res.status(200).json(inscri)
})

app.get('/contact', (req,res) => {
  res.status(200).json(contact)
})

app.get('/contact/:localisation', (req,res) => {
  //console.log(contact)
  const localisation = req.params.localisation
  //console.log(localisation)
  const conct = contact.find(c => c.localisation === localisation)
  console.log(conct)
  res.status(200).json(conct)
})

app.get('/date-jpo', (req,res) => {
  res.status(200).json(dateJPO)
})

app.get('/date-jpo/:date', (req,res) => {
  const date = req.params.date
  const dJPO = dateJPO.find(dateJPO => dateJPO.date === date)
  res.status(200).json(dJPO)
})

/*app.put('/parkings/:id', (req,res) => {
  const id = parseInt(req.params.id)
  let parking = parkings.find(parking => parking.id === id)
  parking.name =req.body.name,
  parking.city =req.body.city,
  parking.type =req.body.type,
  res.status(200).json(parking)
})*/

/*app.post('/parkings', (req,res) => {
    parkings.push(req.body)
    res.status(200).json(parkings)
})*/

/*app.delete('/parkings/:id', (req,res) => {
  const id = parseInt(req.params.id)
  let parking = parkings.find(parking => parking.id === id)
  parkings.splice(parkings.indexOf(parking),1)
  res.status(200).json(parkings)
})*/

app.listen(3000, () => {
    console.log("Serveur à l'écoute")
})