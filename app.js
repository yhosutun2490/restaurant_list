//Required framework in the project
const express = require('express')
const app = express()
const port = 3000
//Required template-engine
const exphbs = require('express-handlebars')
//Restaurant data
const restaurantList = require('./restaurant.json').results
// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
// setting static files
app.use(express.static('public'))
// setting router
app.get('/', (req, res) => {
  res.render('index', { restaurant: restaurantList })
})
app.get('/restaurants/:res_id', (req, res) => {
  const eachRestaurant = restaurantList.find(item => item.id === Number(req.params.res_id))
  res.render('showRes', { restaurant: eachRestaurant })
})

function checkInputLanguage(word) {
  const cnRegex = /[\u4e00-\u9fa5]/g
  const enRegex = /[a-zA-z]/g
  if ((word.match(cnRegex)) && (word.match(cnRegex).length > 0)) {
    return "CN"
  }
  if (word.match(enRegex).length > 0) {
    return "EN"
  }
}
//SerachBars
app.get('/search', (req, res) => {
  //如果輸入是英文搜尋，回傳英文結果
  const words = req.query.keyword.toLowerCase().trim()
  if (words.length === 0) {
    return
  }
  const lang = checkInputLanguage(words)
  let results = []
  //如果輸入是中文搜尋，回傳中文餐廳結果
  if (lang === "CN") {
    results = restaurantList.filter(item => item.name.includes(words) || item.category.includes(words))
  }
  //如果輸入是中文搜尋，回傳英文餐廳結果
  else if (lang === "EN") {
    results = restaurantList.filter(item => item.name_en.toLowerCase().includes(words))
  }
  res.render('index', { restaurant: results })
})
//start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})