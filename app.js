const fs = require('fs')
const express = require('express')
const favicon = require('serve-favicon')
const sslRedirect = require('heroku-ssl-redirect')

const app = express()
app.use(sslRedirect())
app.use(express.static(__dirname + '/build'))
app.use(favicon(__dirname + '/build/favicon.ico'))

const index = fs.readFileSync(__dirname + '/build/index.html')

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const server = app.listen(process.env.PORT || 8420, function() {
	console.log('Express server listening on port ' + server.address().port)
})
