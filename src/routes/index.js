const { Router } = require('express');
const router = Router();
const path = require('path');

router.get('/', (req, res) =>{
    res.send('index');
})



module.exports = router;