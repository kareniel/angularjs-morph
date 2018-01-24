require('angular')
require('angular-mocks')
require('../src')

var test = require('tape')
var injector = angular.injector(['ng', 'ngMock', 'angularjs-morph'])

test('runs', function (t) {
  injector.invoke(($componentController) => {
    var $element = angular.element(`<morph-into></morph-into>`)
    var locals = { $element }
    var bindings = {}
    var ctrl = $componentController('morphInto', locals, bindings)

    t.ok(ctrl, 'component can be instantiated')
    t.end()
  })
})
