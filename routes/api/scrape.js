const express = require('express');
const router = express.Router();
const ogs = require('open-graph-scraper');


// @route   GET api/scrape
// @desc    Get all posts
// @access  Public
//router.get('/:urlLink', (req, res) => {
router.get('/', (req, res) => {
    try {

        //sending the url as json in request body :
        // {
        // "urlLink" : "http://www.daniellejacobson.com/"
        // }

        const urlLink = req.body.urlLink;

        const options = {
            'url': urlLink,
            'timeout': 4000,
            'followAllRedirects': true,
            'maxRedirects': 20
        };
        ogs(options, function(error, results) {
            console.log('error:', error);
            console.log('results:', results);
            res.json(results)
        });

    } catch ( error ) {
        console.error(error); // This is returns true or false. True if there was a error. The error it self is inside the results object.
        res.status(500).send('Server Error')
    }
});


module.exports = router;