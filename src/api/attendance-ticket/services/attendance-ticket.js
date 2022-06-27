'use strict';

/**
 * attendance-ticket service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::attendance-ticket.attendance-ticket');
