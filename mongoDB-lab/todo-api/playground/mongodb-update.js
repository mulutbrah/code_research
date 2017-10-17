//mongod.exe --dbpath /Users/ml/mongo-data

//follow the MongoDB API documentation 
//const MONGO_CLIENT = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//callback url
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to MongoDB server');
	}

	console.log('Connected to MongoDB server');

	// db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('57bc4b15b3b6a3801d8c47a2')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
  	//find by ID
    _id: new ObjectID('59e222f754fecf65d4e06d4f')
  }, {
    $set: {
      name: 'Hermione',
    },
    //increment -> add (+)
    $inc: {
      
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
	
	//db.close();
});