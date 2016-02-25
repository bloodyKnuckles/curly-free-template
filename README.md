# curly-free-template

Content injection is accomplished using standard HTML tag names and CSS selectors.

This module allows you to develop plain HTML/CSS templates with dummy data in the places dynamic
data will be injected. The benefit is that the templates can be developed independently from the
programming that dynamically inserts data into the web page.

It also provides for layering templates. For example, you can have one template for the entire site that is
used on every page, one template for each section that is used throughout it's own section, one
template for each sub-section used on each page in it's particular sub-seciton, and one template for
each page.

In other words, the page template can be wrapped by a sub-section template, those together can
be wrapped by a section template, and those can be wrapped by a site template.

The number of nested template layers is unlimited.

Once it compiles the templates you've listed, this module applies an object you've provided that
identifies HTML tag names and CSS selectors as key names paired with values and replaces (or
appends/prepends) the default content of the elements in the templates that are identified by
the corresponding CSS selectors.

# install

`npm install curly-free-template --save`

# license

MIT
