// Required framework in the project
const { Router } = require('express')
const express = require('express')
const app = express()
const port = 3000
// Required template-engine
const exphbs = require('express-handlebars')
// Restaurant data
const restaurantList = require('./restaurant.json').results
const filterData = { results: [] }
let readMode = "Chinese"
// setting template engine and helper function
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')
// setting static files
app.use(express.static('public'))
// setting router
// Return to Main Page
app.get('/', (req, res) => {
  resetFilterResults()
  readMode = "Chinese"
  // default is chinese page
  res.render('index_CN', { restaurant: restaurantList })
})
// Change Language
app.get('/lang/:language', (req, res) => {
  const pageData = !filterData.results.length ? restaurantList : filterData.results
  if (req.params.language.toUpperCase() === 'CN') {
    res.render('index_CN', { restaurant: pageData })
    readMode = "Chinese"
  }
  if (req.params.language.toUpperCase() === 'EN') {
    res.render('index_EN', { restaurant: pageData })
    readMode = "English"
  }
})
// Show Restaurant details
app.get('/restaurants/:res_id', (req, res) => {
  const eachRestaurant = restaurantList.find(item => item.id === Number(req.params.res_id))
  if (readMode === "Chinese") {
    res.render('showRes_CN', { restaurant: eachRestaurant })
  }
  if (readMode === "English") {
    res.render('showRes_EN', { restaurant: eachRestaurant })
  }


})
// reset all filterResults
function resetFilterResults() {
  filterData.results = []
}

// SearchBars
app.get('/search/:lang', (req, res) => {
  const words = req.query.keyword.toLowerCase().trim()
  // remove special character
  const regexSep = /[^a-zA-z\u4e00-\u9fa5]/g
  // return null if words is all special character
  let removeSpecialCharacter = words.replace(regexSep, '')
  if (!removeSpecialCharacter) {
    removeSpecialCharacter = 'null'
  }
  // input is chinese return chinese filter results
  if (req.params.lang === 'CN') {
    filterData.results = restaurantList.filter(item => item.name.includes(removeSpecialCharacter) || item.category.includes(removeSpecialCharacter) || item.location.includes(removeSpecialCharacter))
    res.render('index_CN', { restaurant: filterData.results, keyword: words })
    readMode = "Chinese"
  }
  // input is English return English filter results
  else if (req.params.lang === 'EN') {
    filterData.results = restaurantList.filter(item => item.name_en.toLowerCase().includes(removeSpecialCharacter) || item.category_en.toLowerCase().includes(removeSpecialCharacter) || item.location_en.toLowerCase().includes(removeSpecialCharacter))
    res.render('index_EN', { restaurant: filterData.results, keyword: words })
    readMode = "English"
  }
  // Special syntax error will redirect to Chinese No found Message
  else {
    res.render('index_CN', { restaurant: filterData.results, keyword: words })
  }
})
// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})
