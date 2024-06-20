const { postAddPlantHandler, getPlantListHandler, getPlantDetailsHandler } = require('./handler');

const routes = [
  {
    path: '/plants',
    method: 'POST',
    handler: postAddPlantHandler,
    options: {
      payload: {
        allow: 'application/json'
      }
    }
  },
  {
    path: '/plants',
    method: 'GET',
    handler: getPlantListHandler
  },
  {
    path: '/plants/{id}',
    method: 'GET',
    handler: getPlantDetailsHandler
  }
];

module.exports = routes;
