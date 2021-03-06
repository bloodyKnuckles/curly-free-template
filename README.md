# curly-free-template

Content injection is accomplished using standard HTML tag names and other CSS selectors.

(Intended for client-side use. For a similar server-side library see
[templateking](http://www.npmjs.com/package/templateking). For a client-side 
[virtual-dom](https://www.npmjs.com/package/virtual-dom) compatible version see 
[shave-template](https://www.npmjs.com/package/shave-template).)

This module allows you to develop plain HTML/CSS templates with dummy data in the places dynamic
data will be inserted. The benefit is that the templates can be developed independently from the
programming that dynamically incorporates data into the web page.

It also provides for layering templates. For example, you can have one template for the entire
site that is used on every page, one template for each section that is used throughout it's own
section, one template for each sub-section used on each page in it's particular sub-seciton, and
one template for each page.

In other words, the page template can be wrapped by a sub-section template, those together can
be wrapped by a section template, and those can be wrapped by a site template.

The number of nested template layers is unlimited.

Once it compiles the templates you've listed, this module applies an object you've provided that
identifies CSS selectors as key names paired with values and replaces (or appends/prepends) the
default content of the elements in the templates that are identified by the corresponding CSS
selectors.

This module requires a writeable stream to output to.

## simple example

``` js
var templates = require('curly-free-template')
var fs = require('fs')

templates(

    // provide the nested templates, starting with outer to inner
    [
      fs.readFileSync('public/simple.html', 'utf-8'),
      fs.readFileSync('public/message.html', 'utf-8')
    ],

    // provide an object of CSS selector keys with values to replace the default template text
    {
        'title':    'My New Title',
        '#message': 'Hello Curly Free!',
        '#datetime': Date()
    },

    // provide a writeable stream to pipe the resulting HTML text to
    process.stdout
)
```

Given the templates:

simple.html
```
<!DOCTYPE html>
<html>
  <head>
    <title>title goes here</title>
  </head>
  <body>
    <div class="template">template</div>
  </body>
</html>
```

And message.html
```
    <h3 id="message">Message</h3>
    <div>Date/Time: <span id="datetime">datetime</span></div>
```

Will output:
```
<!DOCTYPE html>
<html>
    <head>
        <title>My New Title</title>
    </head>
    <body>
        <div class="template">
            <h3 id="message">Hello Curly Free!</h3>
            <div>Date/Time: <span id="datetime">Tue Nov 24 2015 12:51:23 GMT-0600 (CST)</span></div>
        </div>
    </body>
</html>
```
(Layout reformated for clarity.)

See [the examples directory](https://github.com/bloodyKnuckles/curly-free-template/tree/master/examples)
for more examples and additional functionality, including grabbing a portion of a template and
repeatedtly writing it out to form table rows and lists.

# install

`npm install curly-free-template --save`

# license

MIT
