var pre = `<morph-into
  tag="a"
  attrs="{ title: $ctrl.title, href: $ctrl.href }">
  {{$ctrl.text}}
</morph-into>`

var post = `<a 
  title="See on Github" 
  href="https://github.com/kareniel/angularjs-morph" 
  class="ng-binding ng-scope">
  /kareniel/angularjs-morph
</a>`

require('angular')
require('../src/.')

window.angular
  .module('angularjs-morph-example', ['angularjs-morph'])
  .controller('AppCtrl', AppCtrl)

var doc = window.angular.element(document)

doc.ready(function () {
  window.angular.bootstrap(doc, ['angularjs-morph-example'])
})

function AppCtrl () {
  this.text = '/kareniel/angularjs-morph'
  this.title = 'See on Github'
  this.href = 'https://github.com/kareniel/angularjs-morph'
  this.snippets = { pre, post }
}
