const { Firestore } = require('@google-cloud/firestore');

const db = new Firestore({
  projectId: process.env.FIRESTORE_PROJECT_ID,
  credentials: {
    client_email: process.env.FIRESTORE_CLIENT_EMAIL,
    private_key: process.env.FIRESTORE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  }
});

async function storeData(id, data) {
  const collection = db.collection('data');
  return collection.doc(id).set(data);
}

module.exports = storeData;
