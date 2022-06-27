'use strict';

/**
 * exam-submission service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::exam-submission.exam-submission');
