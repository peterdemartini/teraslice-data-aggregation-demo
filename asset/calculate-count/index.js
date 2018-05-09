'use strict';

const util = require("util")
const _ = require("lodash")

function newProcessor(context, opConfig, jobConfig) {
  let state = {}
  return (records, sliceLogger) => {
    _.forEach(records, (rawRecord) => {
      let key
      try {
        key = JSON.parse(rawRecord.toString('utf8')).key
      } catch(err) {
        sliceLogger.warn("unable to parse record", err)
        return
      }
      if (!key) {
        sliceLogger.warn("no key for record")
        return
      }
      const count = _.get(state, [key, "count"], 0)
      _.set(state, [key, "count"], count + 1)
      _.set(state, [key, "key"], key)
      const firstSeenAt = _.get(state, [key, "firstSeenAt"], new Date())
      _.set(state, [key, "firstSeenAt"], firstSeenAt)
      const lastSeenAt = _.get(state, [key, "lastSeenAt"], new Date())
      _.set(state, [key, "lastSeenAt"], lastSeenAt)
    })
    return _.values(state) 
  }
}


function schema() {
  return {}
}


module.exports = {
  newProcessor,
  schema,
}
