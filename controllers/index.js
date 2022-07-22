const homeRoutes = require('./home-routes.js');
const { Router, response} = require('express'); // <-- importing the router
const router = Router(); // <-- Creating an instance of the router

router.use('/', homeRoutes);




module.exports = router;