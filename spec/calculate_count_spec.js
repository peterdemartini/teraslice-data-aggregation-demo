'use strict';

const processor = require('../asset/calculate-count')
const harness = require('teraslice_op_test_harness')(processor)

describe('When the keyed kafka data is read', function() {
  it('should return the the key and the count', function() {
    const data = [
      new Buffer(JSON.stringify({
        "key": "example"
      })),
      new Buffer(JSON.stringify({
        "key": "example"
      })),
      new Buffer(JSON.stringify({
        "key": "example"
      })),
    ]
    const result = harness.run(data)
    expect(result.length).toEqual(1)
    expect(result[0].key).toEqual("example")
  })
})
