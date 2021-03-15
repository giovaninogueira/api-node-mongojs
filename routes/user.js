const express = require('express');
const mongo = require('../db/mongo');

const user = require('../models/User')(mongo);
const userController = require('../controllers/UserController')(user);

const router = express.Router();

router.get('/', userController.getAll.bind(userController));
router.get('/:_id', userController.getById.bind(userController));
router.post('/', userController.create.bind(userController));
router.put('/:_id', userController.update.bind(userController));
router.delete('/:_id', userController.remove.bind(userController));

module.exports = router;