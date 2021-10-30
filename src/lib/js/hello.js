module.exports = {
  teste() {
    let b=0;
    for(let i=0; i<10000000; i++) {
      b += 15 + Math.random()
    }

    return 'invoked from js ' + b
  }
}
