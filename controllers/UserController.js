const debug = require('debug')('livro_nodejs:controller');

class UserController {
    
    constructor (model) {
        this.model = model;
    }

    getAll(request, response, next) {
        this.model.find({}, (err, data) => {
            if (err) {
                return next(err);
            }
            response.json(data);
        });
    }

    getById(request, response, next) {
        const id = request.params._id;
        this.model.findOne(id, (err, data) => {
            if (err) {
                return next(err);
            }
            response.json(data);
        });
    }

    create(request, response, next) {
        let body = request.body;
        this.model.create(body, (err, data) => {
            if (err) {
                return next(err);
            }
            response.json(data);
        });
    }

    update(request, response, next) {
        let body = request.body;
        let id = request.params._id;
        this.model.update(id, body, (err, data) => {
            if (err) {
                return next(err);
            }
            response.json(data);
        });
    }

    remove(request, response, next) {
        let id = request.params._id;
        this.model.remove(id, (err, data) => {
            if (err) {
                return next(err);
            }
            response.json(data);
        });
    }
}

module.exports = (model) => {
    return new UserController(model);
};