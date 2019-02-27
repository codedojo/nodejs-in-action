const { MongoClient } = require('mongodb');

const MONGODB_URL = 'mongodb://localhost:27017/codelibrary';

MongoClient.connect(MONGODB_URL)
    .then(client => {
        console.log('Connected');

        let db = client.db('codelibrary');
        let collection = db.collection('books');

        collection.insertOne({
            title: 'Node.js in Action'
        }).then(result => {
            console.log(result.insertedId);

            client.close();
        });

        collection.find({}).toArray()
            .then(docs => {
                console.log(docs);

                client.close();
            });

        collection.find({}).toArray()
            .then(docs => {
                console.log(docs);

                client.close();
            });

        collection.updateOne({ title: 'Node.js in Action' }, { $set: { slug: 'nodejs-in-action' } })
            .then(result => {
                console.log('Updated: ', result.);

                client.close();
            });

        collection.deleteOne({ title: 'Node.js in Action' })
            .then(result => {
                console.log('Deleted:', result.deletedCount);
            });        
    })
    .catch(console.error);