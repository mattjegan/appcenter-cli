/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the SessionCounts class.
 * @constructor
 * @member {number} [totalCount] total session count
 * 
 * @member {number} [previousTotalCount] previous total session count
 * 
 * @member {array} [sessions] the total session count for each interval
 * 
 */
function SessionCounts() {
}

/**
 * Defines the metadata of SessionCounts
 *
 * @returns {object} metadata of SessionCounts
 *
 */
SessionCounts.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'SessionCounts',
    type: {
      name: 'Composite',
      className: 'SessionCounts',
      modelProperties: {
        totalCount: {
          required: false,
          serializedName: 'totalCount',
          type: {
            name: 'Number'
          }
        },
        previousTotalCount: {
          required: false,
          serializedName: 'previousTotalCount',
          type: {
            name: 'Number'
          }
        },
        sessions: {
          required: false,
          serializedName: 'sessions',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'DateTimeCountsElementType',
                type: {
                  name: 'Composite',
                  className: 'DateTimeCounts'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = SessionCounts;