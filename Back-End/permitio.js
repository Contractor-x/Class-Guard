const { Permit } = require('permitio');
const permit = new Permit({
  pdp: 'https://cloudpdp.api.permit.io',
  token: 'Place-your-API-key-here, i cant publicy place mine',
});

module.exports = permit;
