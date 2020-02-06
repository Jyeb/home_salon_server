const express = require('express')
const dbConnection = require('./config/database')
const path = require('path')
// call express and store in app variable
const app = express()
const cors = require("cors");

app.use(cors());
// call function connect database to express server (./config/database)
dbConnection()

// Create a port variable (variable when deployed, otherwise 5000)

const PORT = process.env.PORT || 5000

// Middleware (allows to get data from body of object in API)
app.use(express.json({ extended: false }))

//  Create Routes
app.use('/api/admin', require('./routes/api/admin'))
app.use('/api/login', require('./routes/api/login'))
app.use('/api/deal', require('./routes/api/deals'))
// app.use('/api/testimonials', require('./routes/api/testimonials'))

// app.use('/api/deals', require('./routes/api/deals'))

if (process.env.NODE_ENV === 'production') {
  // set static folder to use
  app.use(express.static('home_salon_client/build'))

  // in the deal.json, heroku-postbuild runs a script which runs npm build (creates a buihld file inside the client side files, then uses index.html)
  // get "*" specifies any route (apart from the api routes that'll i'll setup above)
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, 'home_salon_client', 'build', 'index.html')
    )
  })
}
// start server on port PORT
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

module.exports = app
