
const express = require('express');
const router = express.Router();

const { getBusinessContractInfo } = require('../../controllers/contract');

router.get('/info/:contractId', getBusinessContractInfo);

module.exports = router;
