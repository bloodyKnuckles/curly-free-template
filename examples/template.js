// browserify -t brfs template.js > bundle.js
var templates = require('../')
var fs = require('fs')
var Stream = require('stream')

var main    = fs.readFileSync(__dirname + '/public/main.html', 'utf8')
var section = fs.readFileSync(__dirname + '/public/section.html', 'utf8')
var message = fs.readFileSync(__dirname + '/public/message.html', 'utf8')

var res = getRes()

var msg = 'okay'
var pagecontent = {
  'head': {_mapappend: {
    'link': [{'link':{href:'public/css/section.css'}}]
  }},
  'title':'curly-free',
  '#sectionheader': {class: {append:'active'}, _text:'Section!'},
  '#message':msg, '#datetime':Date(),
  '#scripts': {_mapprepend: {
    'script': [
      {'script':{src:undefined, _html:'console.log("message loaded")'}},
      {'script':{src:'public/js/section.js'}}
    ]
  }}
}

templates([main, section, message], pagecontent, res)

function getRes () {
  var res = new Stream()
  res.writable = true
  res.write = function (data) {
    document.write(data.toString('utf-8'))
  }
  res.end = function () {
    console.log('end: ', Date())
  }
  return res
}

