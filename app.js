const mongodb = require('mongodb')
const client = mongodb.MongoClient
const url = 'mongodb://127.0.0.1:27017'
const dbname = 'proj1'


client.connect(url, (error, res) => {
    if (error) {
        return console.log(error)
    }
    console.log("success")
    const db = res.db(dbname)

    ////////////////////////////////////////

    db.collection('users').insertOne(
        {
            name: 'eslam',
            age: 31
        }, (error, data) => {
            if (error) {
                return console.log(error);
            }
            console.log(data.insertedId);
        })
    //////////////////////////////////////////////////////////

    db.collection('users').insertMany([
        {
            name: 'mai',
            age: 29
        },
        {
            name: 'selim',
            age: 2
        },
        {
            name: 'ahmed',
            age: 29
        },
        {
            name: 'esraa',
            age: 21
        },
        {
            name: 'amaar',
            age: 58
        },
    ], (error, data) => {
        if (error) {
            return console.log(error);
        }
        console.log(data.insertedCount);
    })





});


