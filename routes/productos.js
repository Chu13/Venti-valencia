const express = require('express');
const router  = express.Router();

/* GET home page. */
router.get('/productos', (req, res, next) => {
  res.render('productos/todos');
});


module.exports = router;
