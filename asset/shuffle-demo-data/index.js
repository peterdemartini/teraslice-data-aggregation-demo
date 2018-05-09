'use strict';

const _ = require("lodash")
const Chance = require("chance")
const util = require("util")

function newProcessor(context, opConfig, jobConfig) {
  const chance = new Chance()
  return (records, sliceLogger) => {
    return _.map(records || [], (record) => {
      record.key = chance.word({ length: 2 }) 
      return record
    })
  }
}


function schema() {
  return {}
}


module.exports = {
  newProcessor,
  schema,
}
