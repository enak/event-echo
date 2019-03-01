var express = require('express');
var router = express.Router();

router.all('/', function (req, res, next) {
  console.log(JSON.stringify(req.body));

  res.location('https://www.mortoneer.com/?returnTo=' + req.body.returnUrl);
  res.status(303)

  res.send({
    userMessage: 'Alright. Here is a link. This is a really important link. Please click the link to continue; I am begging you! Alright. Here is a link. This is a really important link. Please click the link to continue; I am begging you! Alright. Here is a link. This is a really important link. Please click the link to continue; I am begging you! Alright. Here is a link. This is a really important link. Please click the link to continue; I am begging you! Alright. Here is a link. This is a really important link. Please click the link to continue; I am begging you! Alright. Here is a link. This is a really important link. Please click the link to continue; I am begging you! Alright. Here is a link. This is a really important link. Please click the link to continue; I am begging you! Alright. Here is a link. This is a really important link. Please click the link to continue; I am begging you! Alright. Here is a link. This is a really important link. Please click the link to continue; I am begging you!'
  });
});

router.all('/delay', function (req, res, next) {
  console.log(JSON.stringify(req.body));

  res.location('https://www.mortoneer.com/?returnTo=' + req.body.returnUrl);
  res.status(303)

  setTimeout(() => {
    res.send({
      userMessage: 'Alright. Here is a link. This is a really important link. Please click the link to continue; I am begging you! Alright. Here is a link. This is a really important link. Please click the link to continue; I am begging you! Alright. Here is a link. This is a really important link. Please click the link to continue; I am begging you! Alright. Here is a link. This is a really important link. Please click the link to continue; I am begging you! Alright. Here is a link. This is a really important link. Please click the link to continue; I am begging you! Alright. Here is a link. This is a really important link. Please click the link to continue; I am begging you! Alright. Here is a link. This is a really important link. Please click the link to continue; I am begging you! Alright. Here is a link. This is a really important link. Please click the link to continue; I am begging you! Alright. Here is a link. This is a really important link. Please click the link to continue; I am begging you!'
    });
  }, 30000);
});

module.exports = router;