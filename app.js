const fs = require('fs')
const express = require('express')
// const favicon = require('serve-favicon')

const app = express()
app.use(express.static(__dirname + '/build'))
// app.use(favicon(__dirname + '/build/favicon.ico'))

// const index = fs.readFileSync('build/index.html')

app.get('/', function(req, res) {
  // res.sendFile(path.join(__dirname, 'build', 'index.html'))
  res.send(`<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no"><meta name="theme-color" content="#000000"><link rel="manifest" href="/manifest.json"><link rel="shortcut icon" href="/favicon.ico"><title>Maiden</title><link href="/static/css/main.00a75dd2.css" rel="stylesheet"></head><body><noscript>You need to enable JavaScript to run this app.</noscript><div id="root"></div><script type="text/javascript" src="/static/js/main.f9bd1f53.js"></script></body></html>`)
})

const server = app.listen(process.env.PORT || 8420, function() {
	console.log('Express server listening on port ' + server.address().port)
})
