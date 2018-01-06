const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/nodejs-in-action')
    .then(client => {
        console.log('Connected');

        let db = client.db('nodejs-in-action');
        let collection = db.collection('notes');

        // collection.insertOne({
        //     title: 'Node.js',
        //     content: 'as;dfasjdf;sdf'
        // }).then(result => {
        //     console.log(result);
        // });

        // collection.findOne({ title: 'Node.js' })
        //     .then(docs => {
        //         console.log(docs);
        //     });

        // collection.updateOne({ title: 'Node.js' }, { $set: { title: 'NodeJS' } })
        //     .then(result => {
        //         console.log(result.result);
        //     })
        //     .catch(console.error);

        // collection.deleteOne({ title: 'Node.js' })
        //     .then(result => {
        //         console.log(result.deletedCount)
        //     });

        client.close();
    })
    .catch(console.error);