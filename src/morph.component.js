Morph.$inject = ['$element', '$compile', '$scope']

module.exports = {
  controller: Morph,
  bindings: {
    tag: '@',
    attrs: '<'
  }
}

function Morph ($element, $compile, $scope) {
  var ctrl = this

  ctrl.$postLink = function () {
    var text = $element.html()
    var el = ctrl._buildElement(ctrl.tag, ctrl.attrs, text)
    var compiledEl = $compile(el)($scope.$parent)

    $element.replaceWith(compiledEl)
  }

  ctrl._buildElement = function (tag, attrs, text) {
    attrs = attrs || {}
    text = text || ''

    var el = document.createElement(tag)
    var $el = angular.element(el)

    Object.keys(attrs).forEach(function (key) {
      $el.attr(key, attrs[key])
    })

    $el.text(text)

    return $el
  }
}
