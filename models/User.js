class User {
    constructor (mongo) {
        this.mongo = mongo;
    }

    find(query, callback) {
        this.mongo.collection('users').find(query, callback);
    }

    findOne(_id, callback) {
        let query = {
            _id: this.mongo.ObjectId(_id)
        };
        this.mongo.collection('users').find(query, callback);
    }

    create(data, callback) {
        this.mongo.collection('users').insert(data, callback);
    }

    update(_id, data, callback) {
        let query = {
            _id: this.mongo.ObjectId(_id)
        };
        this.mongo.collection('users').updateOne(query, {
            $set: data
        }, callback);
    }

    remove(_id, callback) {
        let query = {
            _id: this.mongo.ObjectId(_id)
        };
        this.mongo.collection('users').remove(query, callback);
    }
}

module.exports = (mongo) => {
    return new User(mongo);
}