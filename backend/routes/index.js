const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.status(200).json({ msg: 'Trabajando Api' });
});

module.exports = router;
