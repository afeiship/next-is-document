(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.isDocument = function(inObj) {
    return inObj != null && inObj.nodeType == inObj.DOCUMENT_NODE;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.isDocument;
  }
})();
