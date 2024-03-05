
const express = require('express');
const router = express.Router();

const { getBusinessContractInfo } = require('../../controllers/contract');

router.get('/info', getBusinessContractInfo);

module.exports = router;
