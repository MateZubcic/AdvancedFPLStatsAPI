const express = require('express');
const playerController = require('../controllers/playerController');

const router = express.Router();

router.get('/:id', playerController.get_Player);
router.get('/', playerController.get_All);
router.post('/', playerController.insert_Player);

module.exports = router;
