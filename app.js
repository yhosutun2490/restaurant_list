//Required framework in the project
const express = require('express')
const app = express()
const port = 3000
//Required template-engine
const exphbs = require('express-handlebars')
// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'show' }))
app.set('view engine', 'handlebars')
// setting router
// index page
app.get('/', (req, res) => {
  res.render('index')
})
//start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})