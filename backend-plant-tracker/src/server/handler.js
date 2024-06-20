const { addPlant, getPlantList, getPlantDetails } = require('../services/plantService');
const storeData = require('../services/storeData');

async function postAddPlantHandler(request, h) {
  const { plant } = request.payload;

  const id = await addPlant(plant);
  const response = h.response({
    status: 'success',
    message: 'Plant added successfully',
    data: { id }
  });
  response.code(201);
  return response;
}

async function getPlantListHandler(request, h) {
  const plants = await getPlantList();
  const response = h.response({
    status: 'success',
    data: { plants }
  });
  response.code(200);
  return response;
}

async function getPlantDetailsHandler(request, h) {
  const { id } = request.params;
  const plant = await getPlantDetails(id);
  const response = h.response({
    status: 'success',
    data: { plant }
  });
  response.code(200);
  return response;
}

module.exports = { postAddPlantHandler, getPlantListHandler, getPlantDetailsHandler };
