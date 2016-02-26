var templates = require('../')
var fs = require('fs')

templates(

    // provide the nested templates, starting with outer to inner
    [
      fs.readFileSync('public/simple.html', 'utf-8'),
      fs.readFileSync('public/message.html', 'utf-8')
    ],

    // provide an object of CSS selector keys with values to replace the default template text
    {
        'title':     'My New Title',
        '#message':  'Hello Curly Free!',
        '#datetime': Date()
    },

    // provide a writeable stream to pipe the resulting HTML text to
    process.stdout
)
