const express = require('express');
const customerController = require('../controllers/customerController');

const router = express.Router();

router.get('/tasks', customerController.index);
router.get('/create', customerController.create);
router.post('/create',customerController.store);

module.exports = router;