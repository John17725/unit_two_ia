const express = require('express');
const router = express.Router();
const path = require('path');
var alert = require('alert');
const { unlink } = require('fs-extra');

router.use(express.static('public'));
router.use('/styles', express.static(__dirname + 'public/styles'));
router.use('/img', express.static(__dirname + 'public/img'));
router.use('/js', express.static(__dirname + 'public/js'));


const Image = require('../models/imagen')
const Petition = require('../models/petition')
router.get('/', async (req, res) => {
	res.render('index')
});
module.exports = router;
