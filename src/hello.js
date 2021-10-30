const bindings = require('bindings')

function requireFallback(module, fallback) {
  try {
    return bindings(module)
  } catch (e) {
    if (e.message.includes('Could not locate the bindings file.')) {
      return require(fallback)
    }
    throw e
  }
}

module.exports = {
  teste: requireFallback('hello', './lib/js/hello.js').teste
}
