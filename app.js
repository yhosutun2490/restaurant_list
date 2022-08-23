// Required framework in the project
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
// check input words is Chinese or English
function checkInputLanguage(word) {
  const cnRegex = /[\u4e00-\u9fa5]/g
  const enRegex = /[a-zA-z]/g
  if (word.length !== 0) {
    if ((word.match(cnRegex)) && (word.match(cnRegex).length > 0)) {
      return 'CN'
    }
    if (word.match(enRegex).length > 0) {
      return 'EN'
    }
  }
}
// SearchBars
app.get('/search', (req, res) => {
  const words = req.query.keyword.toLowerCase().trim()
  // remove initial special character
  const regexSep = /[^a-zA-z\u4e00-\u9fa5]/g
  const removeSpecialCharacter = words.replace(regexSep, '')
  const lang = checkInputLanguage(removeSpecialCharacter)

  // input is chinese return chinese filter results
  if (lang === 'CN') {
    filterData.results = restaurantList.filter(item => item.name.includes(words) || item.category.includes(words) || item.location.includes(words))
    res.render('index_CN', { restaurant: filterData.results, keyword: words })
    readMode = "Chinese"
  }
  // input is English return English filter results
  else if (lang === 'EN') {
    filterData.results = restaurantList.filter(item => item.name_en.toLowerCase().includes(words) || item.category_en.toLowerCase().includes(words) || item.location_en.toLowerCase().includes(words))
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
