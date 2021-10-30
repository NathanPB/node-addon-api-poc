const a = require('./src/hello')
const Benchmark = require('benchmark')
const suite = new Benchmark.Suite

const js = require('./src/lib/js/hello')
const cpp = require('bindings')('hello')

suite
  .add('from js', function () {
    js.teste()
  })
  .add('from cpp', function () {
    cpp.teste()
  })
  .on('complete', function () {
    this.forEach(item => console.log(item.toString()));
  })
  .run();
