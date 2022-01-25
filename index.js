const bench = require('nanobench')

const encryptDataWithRSA = require('./rsa')
const encryptDataWithAES = require('./aes')
const encryptDataWithDES = require('./des')

const secretData = "my secret data";

bench('RSA 1000 times', function (b) {
  b.start()
 
  for (var i = 0; i < 1000; i++) {
    encryptDataWithRSA(secretData)
  }
 
  b.end()
})

bench('AES 1000 times', function (b) {
  b.start()

  for (var i = 0; i < 1000; i++) {
    encryptDataWithAES(secretData)
  }

  printMemoryUsage()
 
  b.end()
})

bench('DES 1000 times', function (b) {
  b.start()

  for (var i = 0; i < 1000; i++) {
    encryptDataWithDES(secretData)
  }

  printMemoryUsage()
 
  b.end()
})
