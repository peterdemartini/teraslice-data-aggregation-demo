'use strict';

const processor = require('../asset/shuffle-demo-data')
const harness = require('teraslice_op_test_harness')(processor)

describe('When the operations is passed demo data', function() {
  it('should return the data with a new key', function() {
    const data = [
      {
        "userAgent": "Mozilla"
      },
      {
        "userAgent": "Chrome",
      },
      {
        "userAgent": "Safari",
      }
    ]
    const result = harness.run(data)
    expect(result.length).toEqual(3)
    expect(result[0].key.length).toEqual(2)
    expect(result[0].userAgent).toEqual("Mozilla")
    expect(result[1].key.length).toEqual(2)
    expect(result[1].userAgent).toEqual("Chrome")
    expect(result[2].key.length).toEqual(2)
    expect(result[2].userAgent).toEqual("Safari")
  })
})
