var express = require('express'),
	router = express.Router(),
	db = require('../models'),
	dataHelpers = require('../helpers/data'),
	statsHelpers = require('../helpers/stats'),
	settingsHelpers = require('../helpers/settings');


/*****
* C reate
* R ead
* U pdate
* D elete
*****/

router.route('/data')
	.get(dataHelpers.getData)
	.post(dataHelpers.createData)
	.delete(dataHelpers.deleteData);


router.route('/data/:id')
	.get(dataHelpers.getOneData)
	.put(dataHelpers.editData)
	.delete(dataHelpers.deleteData);

router.route('/settings')
	.get(settingsHelpers.getSettings)
	.put(settingsHelpers.editSettings);

router.route('/stats')
	.get(statsHelpers.getStats)
	.put(statsHelpers.editStats)
	.delete(statsHelpers.resetStats);

module.exports = router;