# angularjs-morph

sometimes the type of component you want to render will change depending on some input.
this is a component that morphs in a specified component.


## install

`npm install angularjs-morph`


## usage

```js
angular.module('myApp', ['angularjs-morph'])

```

```html
<morph-into tag="a" attrs="{ title: 'DuckDuckGo', href: 'https://duckduckgo.com' }">
  Search
</morph-into>
```


## api

#### `tag=` 
string. a tag name.


#### `attrs=` 
object. every value will be assigned to an attribute of the key's name

#### text
any text added inside the element will be rendered as the inner text of the morphed component.


## example

[see example on netlify](http://angularjs-morph.netlify.com)

or run it yourself:

```
git clone https://github.com/kareniel/angularjs-morph
cd angularjs-morph
npm install
npm start
```
