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

app.get('/Formation/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const Formation = Formation.find(Formation => Formation.id === id)
    res.status(200).json(Formation)
})

app.get('/Lieu', (req,res) => {
  res.status(200).json(Lieu)
})

app.get('/Lieu/:id', (req,res) => {
  const id = parseInt(req.params.id)
  const Lieu = Lieu.find(Lieu => Lieu.id === id)
  res.status(200).json(Lieu)
})

app.get('/tarif', (req,res) => {
  res.status(200).json(tarif)
})

app.get('/tarif/:id', (req,res) => {
  const id = parseInt(req.params.id)
  const tarif = tarif.find(tarif => tarif.id === id)
  res.status(200).json(tarif)
})

app.get('/inscription', (req,res) => {
  res.status(200).json(inscription)
})

app.get('/inscription/:id', (req,res) => {
  const id = parseInt(req.params.id)
  const inscri = inscription.find(inscription => inscription.id === id)
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

app.get('/date-jpo/:id', (req,res) => {
  const id = parseInt(req.params.id)
  const dJPO = dateJPO.find(dJPO => dateJPO.id === id)
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

app.listen(8080, () => {
    console.log("Serveur à l'écoute")
})