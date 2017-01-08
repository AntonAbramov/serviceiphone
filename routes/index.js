var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {
    title: "Сервисный центр Apple - Ремонт iPhone, iPad, MacBook в Service-iPhone",
    description: "",
    keywords: ""
  });
});

router.get('/remont', function (req, res, next) {
  res.render('remont', {
    title: "Ремонт всей техники Apple в Киеве - Сервисный центр Service-iPhone",
    description: "",
    keywords: "",
    menuActive: ''
  });
});

router.get('/remont-iphone', function (req, res, next) {
  res.render('iphones/index', {
    title: "Ремонт iPhone в Киеве - Сервисный центр Service-iPhone",
    description: "",
    keywords: "",
    menuActive: 'iphone'
  });
});

router.get('/remont-ipad', function (req, res, next) {
  res.render('ipads/index', {
    title: "Ремонт iPad в Киеве - Сервисный центр Service-iPhone",
    description: "",
    keywords: "",
    menuActive: ''
  });
});

router.get('/remont-macbook', function (req, res, next) {
  res.render('macbooks/index', {
    title: "Ремонт MacBook в Киеве - Сервисный центр Service-iPhone",
    description: "",
    keywords: "",
    menuActive: ''
  });
});

module.exports = router;
