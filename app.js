const express = require('express')
const app = express()
app.use(express.json())
const port = 3000

app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})

app.get('/v1/explorers', (req, res) => {
  console.log(`API Explorers GET ALL request ${new Date()}`)
  const explorer1 = {id: 1, name: 'Carlo1'}
  const explorer2 = {id: 2, name: 'Carlo2'}
  const explorer3 = {id: 3, name: 'Carlo3'}
  const explorer4 = {id: 4, name: 'Carlo4'}
  const explorer5 = {id: 5, name: 'Carlo5'}
  const explorers = [explorer1, explorer2, explorer3, explorer4, explorer5]
  res.status(200).json(explorers)
})

app.get('/v1/explorers/:id', (req, res) => {
  console.log(`API Explorer GET request ${new Date()}`)
  console.log(`Getting explorer with id ${req.params.id}`)
  const explorer = {id: 1, name: "Carlo"}
  res.status(200).json(explorer)
})

app.post('/v1/explorers', (req, res) => {
  console.log(`API Explorers POST request ${new Date()}`)
  const requestBody = req.body
  res.status(201).json({message: "Created"})
})

app.put('/v1/explorers/:id', (req, res) => {
  console.log(`API Explorer PUT request ${new Date()}`)
  console.log(`Update explorer with id ${req.params.id}`)
  const requestBody = req.body
  res.status(200).json({message: "Updated"})
})