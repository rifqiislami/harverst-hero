const { Firestore } = require('@google-cloud/firestore');
const InputError = require('../exceptions/InputError');

const db = new Firestore();
const plantCollection = db.collection('plants');

async function addPlant(plant) {
  const docRef = await plantCollection.add(plant);
  return docRef.id;
}

async function getPlantList() {
  const snapshot = await plantCollection.get();
  const plants = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return plants;
}

async function getPlantDetails(id) {
  const doc = await plantCollection.doc(id).get();
  if (!doc.exists) {
    throw new InputError('Plant not found');
  }
  return { id: doc.id, ...doc.data() };
}

module.exports = { addPlant, getPlantList, getPlantDetails };
